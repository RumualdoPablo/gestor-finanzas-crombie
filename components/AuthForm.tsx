"use client";

import React, { useState, useContext, FormEvent } from "react";
import { UserAuth } from "@/context/AuthContext";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";


function AuthForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { signInUser, googleSignIn } = UserAuth();
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInUser(formData.email, formData.password);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Button type="submit">Login</Button>
          <Button onClick={googleSignIn}>Login with Google</Button>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;

/*
import { useCallback, useEffect, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Input from "./Input"
import Button from "./Button"
import AuthGoogleButton from "./AuthSocialButton"
import axios from "axios"
import { toast } from "react-hot-toast"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"

type Variant = "LOGIN" | "REGISTER"

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN")
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const session = useSession()

  useEffect(() => {
    if(session?.status === 'authenticated') {
      router.push('/dashboard')
    }
  }, [session?.status, router])
  
  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER")
    } else {
      setVariant("LOGIN")
    }
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    if (variant === "REGISTER") {
      axios.post('/api/register', data)
      .then(() => signIn('credentials', data))
      .catch(() => toast.error('Something went wrong!'))
      .finally(() => setIsLoading(false))
    }

    if (variant === "LOGIN") {
      signIn('credentials', {
        ...data,
        redirect: false
      })
      .then((callback) => {
        if(callback?.error){
          toast.error('Incorrect credentials')
        }

        if(callback?.ok && !callback?.error){
          toast.success('Session started!')
          router.push('/dashboard')
          router.refresh()
        }
      })
      .finally(() => setIsLoading(false))
    }
  }

  const socialAction = async (action: string) => {
    setIsLoading(true)

    await signIn(action, {redirect: false})
    .then((callback) => {
      if(callback?.error){
        toast.error('Incorrect credentials')
      }

      if(callback?.ok && !callback?.error){
        toast.success('Session started!')
        router.push('/dashboard')
      }
    })
    .finally(() => setIsLoading(false))
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        className="bg-white px-4 py-8 shadow
            sm:rounded-lg sm:px-10"
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              type="text"
              register={register}
              errors={errors}
              disabled={isLoading}
              required={true}
            />
          )}

          <Input
            id="email"
            label="Email"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
            required={true}
          />

          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
            required={true}
          />

          <div>
            <Button disabled={isLoading} type="submit">
                {variant === 'LOGIN' ? 'Log in' : 'Sign up'}
            </Button>
          </div>
        </form>

        <div className="mt-6">
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"/>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                        Or continue with
                    </span>
                </div>
            </div>

            <div className="mt-6 flex gap-2">
                <AuthGoogleButton onClick={() => socialAction('google')}/>
            </div>
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2
        text-gray-500">
            <div>
                {variant === 'LOGIN' ? 'Dont have an account?' : 'Do you already have an account?'}
            </div>
            <div onClick={toggleVariant} className="underline cursor-pointer">
                {variant === 'LOGIN' ? 'Create an account' : 'Log in'}
            </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm*/
