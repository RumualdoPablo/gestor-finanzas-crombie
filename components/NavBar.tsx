'use client'

import { IconWallet } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import Modal from "./Modal"
import AuthForm from "./AuthForm"
import { useRouter } from "next/navigation"


import { UserAuth } from "@/context/AuthContext"
import Link from "next/link";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    ///nuevo
    const { user, logOut } = UserAuth();

    const hanldeSignOut = async () => {
      try {
        await logOut();
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
                    <header>
            <div>
                <IconWallet />
                <h1>CrombieWallet</h1>
            </div>

            <button type="button" onClick={toggleModal} className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                Start
                <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>

            <Modal toggleModal={toggleModal} isOpen={isOpen}>
                <AuthForm />
            </Modal>
        </header>
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

export default NavBar



/*
    const [isOpen, setIsOpen] = useState(false)
    const session = useSession()
    const router = useRouter()

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        if (session.data) {
        router.push('/dashboard');
        }
    }, [session.data, router]);
  */  
 
/*    
    return (
        <header>
            <div>
                <IconWallet />
                <h1>CrombieWallet</h1>
            </div>

            <button type="button" onClick={toggleModal} className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                Start
                <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>

            <Modal toggleModal={toggleModal} isOpen={isOpen}>
                <AuthForm />
            </Modal>
        </header>
    )
}*/
