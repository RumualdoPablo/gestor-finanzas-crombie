import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='bg-gray-400'>
            <nav className='flex justify-between'>
                <Link href="/">
                    <h1 className="text-4xl font-semibold m-4 font-principal tracking-wider">CrombieBudget</h1>
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