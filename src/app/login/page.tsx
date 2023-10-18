"use client";
import React, { useState, useContext, FormEvent } from "react";
import { UserAuth } from "@/context/AuthContext";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { signInUser, googleSignIn } = UserAuth();
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInUser(formData.email, formData.password);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Button type="submit">Login</Button>
          <Button onClick={googleSignIn}>Login with Google</Button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
