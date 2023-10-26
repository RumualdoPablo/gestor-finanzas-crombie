"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import {
  AuthContextProps,
  UserData,
  registerForm,
} from "@/interfaces/registerForm";

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserData>();

  const router = useRouter();

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const userCredential = await signInWithPopup(auth, provider);

      const userDocRef = doc(db, "users", userCredential.user.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (!userDocSnapshot.exists()) {
        const userData = {
          name: userCredential.user.displayName,
          email: userCredential.user.email,
          profilePictureURL: userCredential.user.photoURL,
          expenses: [],
        };
        await setDoc(userDocRef, userData);
      }

      router.push(`/profile/${userCredential.user.uid}`);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const registerUser = async (formData: registerForm) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      await sendEmailVerification(userCredential.user);

      const userDocRef = doc(db, "users", userCredential.user.uid);
      const userData = {
        name: formData.name,
        email: formData.email,
        profilePictureURL: formData.profilePictureURL,
        expenses: [],
      };
      await setDoc(userDocRef, userData);

      router.push(`/profile/${userCredential.user.uid}`);
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  };

  const signInUser = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("User signed in successfully:", userCredential.user);
      router.push(`/profile/${userCredential.user.uid}`);
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    }
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, googleSignIn, logOut, registerUser, signInUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("UserAuth must be used within a AuthContextProvider");
  }
  return context;
};
