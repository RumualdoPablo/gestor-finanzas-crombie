import prisma from "@/libs/prisma"
import getCurrentUser from "./getCurrentUser"

export async function getIncomes() {
    try {
        const currentUser = await getCurrentUser()

        // if (!currentUser) {
        //     throw new Error("User not authenticated")
        // }

        const income = await prisma.income.findMany({
            where: { userId: 1}
        })

        return income
    } catch (error) {
        console.log(error)
    }
}