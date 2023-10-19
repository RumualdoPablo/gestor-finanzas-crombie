import { SignInResponse, signIn } from 'next-auth/react';
import React from 'react'

const GoogleSignIn = () => {
    const googleAuth = async () => {
        try {
            const response: SignInResponse | undefined = await signIn('google', { callbackUrl: "http://localhost:3000/expenses/list" }); // Reemplaza 'google' con el proveedor que estás utilizando
            if (response) {
                return response
            }
        } catch (error) {
            console.error("Ocurrió un error: ", error);
        }
    };

    return (
        <button onClick={googleAuth}
            className="bg-slate-200 font-semibold text-black rounded-md py-2 mt-8 w-full">
            Sign in with Google
        </button>
    )
}

export default GoogleSignIn