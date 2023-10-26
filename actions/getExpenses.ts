import prisma from "@/libs/prisma"
import getCurrentUser from "./getCurrentUser"

export async function getExpenses() {
    try {
      const currentUser = await getCurrentUser();
  
      // if (!currentUser) {
      //   throw new Error("User not authenticated");
      // }
  
      const expenses = await prisma.expense.findMany({
        where: {
          userId: 1
        }
      });
  
      return expenses;
    } catch (error) {
      console.log(error);
    }
  }