'use client'

import { IconWallet } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import Modal from "./Modal"
import AuthForm from "./AuthForm"
import { useSession } from 'next-auth/react' 
import { useRouter } from "next/navigation"
import Link from 'next-intl/link';

const NavBar = () => {

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
    
    
    return (
        <nav>
            <div>
                <IconWallet />
                <h1>CrombieWallet</h1>
            </div>

            <Link></Link>
            <button type="button" onClick={toggleModal} className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                Start
                <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>

            <Modal toggleModal={toggleModal} isOpen={isOpen}>
                <AuthForm />
            </Modal>
        </nav>
    )
}

export default NavBar
