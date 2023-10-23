"use client"

import React from 'react'
import Link from 'next/link'
import { SignOutResponse, signOut, useSession } from 'next-auth/react'

const Navbar = () => {

    const { data: session } = useSession()

    const googleLogOut = async () => {
        try {
            const response: SignOutResponse | undefined = await signOut()
            if (response) {
                return response
            }
        } catch (error) {
            console.error("Ocurrió un error: ", error);
        }
    };


    return (
        <div className='bg-gray-100 shadow-lg'>
            <nav className='flex justify-between'>
                <Link href="/">
                    <h1 className={"text-4xl font-bold m-4"}>CrombieBudget</h1>
                </Link>
                {session?.user ?
                    <button className='rounded-lg bg-slate-950 text-white font-semibold py-3 px-5 mr-1'
                    onClick={googleLogOut}>Log out</button>
                    : 
                    <div className='flex gap-x-4 m-4 items-center '>
                        <div className=''>
                            <Link href="/sign-in">Sign in</Link>
                        </div>
                        <div className='rounded-lg bg-slate-950 text-white font-semibold py-3 px-5 mr-1'>
                            <Link href="/sign-up">Sign up</Link>
                        </div>
                    </div>
                }
            </nav>
        </div>
    )
}

export default Navbar