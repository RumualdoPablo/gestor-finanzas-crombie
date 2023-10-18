export interface registerForm {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  profilePictureURL?: string;
}

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserData {
  name: string;
  email: string;
  profilePictureURL: string;
}

export interface AuthContextProps {
  user: UserData | null;
  googleSignIn: () => Promise<void>;
  logOut: () => void;
  registerUser: (formData: registerForm) => Promise<void>;
  signInUser: (email: string, password: string) => Promise<void>;
}
