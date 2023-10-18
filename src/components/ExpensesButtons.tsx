"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

const ExpensesButtons = (props: {
    productId: number,
}) => {

    const router = useRouter()

    const handleDelete = async () => {
        await fetch(`/api/expenses/${props.productId}`, {
            method: "DELETE",
        })
        router.refresh()
    }

    return (
        <div className="gap-y-2">
            <button className="rounded p-2 bg-red-500 font-semibold" onClick={handleDelete}>Eliminar</button>
            <div className="
            rounded p-2 
            bg-amber-500 
            font-semibold 
            w-[78px] 
            text-center
            mt-2
            ">
                <Link href={`/expenses/edit/${props.productId}`}>Editar</Link>
            </div>
        </div>
    )
}

export default ExpensesButtons