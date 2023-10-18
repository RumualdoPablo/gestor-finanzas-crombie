import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='bg-gray-100 shadow-lg'>
            <nav className='flex justify-between'>
                <Link href="/">
                    <h1 className={"text-4xl font-bold m-4"}>CrombieBudget</h1>
                </Link>
                <div className='flex gap-x-4 m-4 items-center '>
                    <div className='text'>
                        <Link href="/sign-in">Sign in</Link>
                    </div>
                    <div className='rounded-lg bg-slate-950 text-white font-semibold py-3 px-5 mr-1'>
                        <Link href="/sign-up">Sign up</Link>
                    </div>
                </div>
            </nav></div>
    )
}

export default Navbar