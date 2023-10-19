import prisma from "@/app/libs/prisma"
import getCurrentUser from "./getCurrentUser"

export async function getIncomes() {
    try {
        const currentUser = await getCurrentUser()

        if (!currentUser) {
            throw new Error("User not authenticated")
        }

        const expenses = await prisma.income.findMany({
            where: { userId: currentUser?.id}
        })

        return expenses
    } catch (error) {
        console.log(error)
    }
}