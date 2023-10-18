"use client";
import Link from "next/link";
import React from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

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
        {user && (
          <li className="p-2 cursor-pointer">
            <Link href={`/profile/${user.uid}`}>Profile</Link>
          </li>
        )}
      </ul>
      {!user ? (
        <ul className="flex">
          <li className="p-2 cursor-pointer">
            <Link href="/login">Login</Link>
          </li>
          <li className="p-2 cursor-pointer">
            <Link href="/register">Register</Link>
          </li>
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
