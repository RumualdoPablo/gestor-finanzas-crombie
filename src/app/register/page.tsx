"use client";
import Button from "@/components/Button";
import { registerForm } from "@/interfaces/registerForm";
import React, { useState, FormEvent } from "react";
import Image from "next/image";
import { UserAuth } from "@/context/AuthContext";
import { validateRegistrationForm } from "../utils/RegisterFormValidation";

function Page() {
  const [formData, setFormData] = useState<registerForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePictureURL: "https://unavatar.io/reddit/kikobeats",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validateRegistrationForm(formData);

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      await registerUser(formData);
    } catch (error) {
      setError("Error al registrar el usuario. Por favor, inténtalo de nuevo.");
      console.error("Error al registrar el usuario:", error);
    }
  };

  const { googleSignIn, registerUser } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="flex justify-center px-6 my-12 w-full">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full hidden lg:block lg:w-5/12">
            <Image
              className="rounded-l-lg"
              src="/register.png"
              alt="Register picture"
              width={800}
              height={500}
            />
          </div>
          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
            <form
              onSubmit={handleSubmit}
              className="px-8 pt-6 pb-8 mb-4 rounded"
            >
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 w-60">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="md:ml-2 w-60">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 w-60">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="md:ml-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700 w-60">
                    Confirm Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              {error && (
                <div className="text-red-500 mb-4 flex justify-center">
                  {error}
                </div>
              )}
              <div className="mb-6 text-center flex justify-center gap-8">
                <Button type="submit">Register</Button>
                <Button onClick={handleSignIn}>Login with google</Button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Already have an account? Login!
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
