"use client";
import { useEffect, useState } from "react";
import { db } from "@/firebase";
import { doc, getDoc, collection } from "firebase/firestore";
import { useParams, useRouter } from "next/navigation";
import { UserAuth } from "@/context/AuthContext";
import Expenses from "@/components/Expenses";

interface UserData {
  name: string;
  email: string;
  profilePictureURL: string;
}
const Profile = () => {
  const { id } = useParams();
  const { user } = UserAuth();
  const [userData, setUserData] = useState<UserData | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) {
        router.push("/login");
      }
      if (typeof id === "string") {
        try {
          const userDocRef = doc(db, "users", id);
          const docSnapshot = await getDoc(userDocRef);
          console.log("snapshot", docSnapshot);
          if (docSnapshot.exists()) {
            setUserData(docSnapshot.data() as UserData);
          } else {
            console.log("User data not found");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [id]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white">
      <h1>Welcome, {userData?.name}</h1>
      <p>Email: {userData?.email}</p>
      <img src={userData?.profilePictureURL} alt="User Avatar" />
      <Expenses/>
    </div>
  );
};

export default Profile;
