"use client"

import { IconWallet, IconUser, IconLogout } from "@tabler/icons-react"
import { Title, Text } from "@tremor/react"
import { useEffect } from "react"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"


const HeaderDashboard = () => {
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session?.status !== "authenticated") {
      console.log("Not authenticated")
      // router.push("/")
      {/*Descomentar el router.push cuando termine*/}
    }
  }, [session?.status, router])

  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex-col items-start">
        <Title className="flex gap-2 items-center">
          <IconWallet />
          <span>CrombieWallet</span>
        </Title>
        <Text className="text-xs mt-2">MANAGE YOUR MONTHLY EXPENSES</Text>
      </div>

      <div>
        <IconUser />
        <span>{session.data?.user?.name}</span>
        <IconLogout
          onClick={() => signOut()}
          className="cursor-pointer rounded p-1 
            hover:bg-white"
          size={32}
        />
      </div>
    </header>
  )
}

export default HeaderDashboard
