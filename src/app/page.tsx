import "@/app/global.css"
import Link from 'next/link'
import Image from "next/image"

const Page = () => {
    return (
        <div>
            <nav className='flex justify-between'>
                <h1 className="text-4xl font-semibold m-4">Crombie gastos</h1>
                <div className='flex gap-x-4 m-4'>
                    <Link href="/sign-in">Sign in</Link>
                    <Link href="/sign-up">Sign up</Link>
                </div>
            </nav>
            <div className="w-40 h-40">
                
            </div>
        </div>
    )
}

export default Page