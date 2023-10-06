import "@/app/global.css"
import prisma from "@/libs/prisma"
import Link from "next/link"

export default async function Page() {
    const allExpenses = await prisma.expense.findMany()

    return(
        <main className=" bg-slate-200 h-screen">
            <div className="flex justify-center">
                <h2 className="">Todos los gastos</h2>
            </div>
            {allExpenses.map((expense) => (
                <div key={expense.id} className="flex justify-center gap-x-10 gap-y-10">
                    <p>{expense.description}</p>
                    <p>{expense.amount}</p>
                    <p>{expense.categorie}</p>
                </div>
            ))}
            <Link href="/" className="p-4 border-2 m-2 bg-green-300 rounded-lg hover:bg-green-500"> Agregar otro gasto </Link>
        </main>
    )
}