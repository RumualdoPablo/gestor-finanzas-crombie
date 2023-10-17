"use client";
import Link from "next/link";
import React from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const hanldeSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2 text-white">
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/profile">Profile</Link>
        </li>
      </ul>
      {!user ? (
        <ul className="flex">
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Login
          </li>
          <Link href="/register">Register</Link>
        </ul>
      ) : (
        <div>
          <p>Welcome {user.email}</p>
          <p onClick={hanldeSignOut} className="cursor-pointer">
            Sign out
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
