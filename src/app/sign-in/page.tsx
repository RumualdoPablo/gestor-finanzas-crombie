"use client"
import "@/app/global.css"
import Link from "next/link"

const Page = () => {
    return (
        <div className="h-[calc(100vh-10rem)] flex items-center justify-center">
            <div className="h-3/5 w-1/4 shadow-lg p-5 rounded-xl">
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold font-inter">Sign in</h2>
                    <div className="flex flex-col items-end">
                    <p>Dont have an account?</p>
                    <Link href="/sign-up" className="hover:font-semibold">Join now</Link>
                    </div>
                </div>
                
                <form className="gap-y-4 flex flex-col">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="Ingrese su correo"
                className="py-3 rounded-lg text-center"/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="Ingrese su contraseña"
                className="py-3 rounded-lg text-center"/>
                <button className="bg-slate-950 font-semibold text-white rounded-md py-2 mt-4"
                type="submit">Sign in</button>
                </form>
                <div className="w-100%">
                <button className="bg-slate-200 font-semibold text-black rounded-md py-2 mt-8 w-full">
                    Sign in with Google</button>
                </div>
            </div>
        </div>
    )
}

export default Page