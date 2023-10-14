import { NextResponse } from "next/server";
import  prisma  from "@/libs/prisma"

export async function GET() {
    try {
        const expenses = await prisma.expense.findMany()
        return NextResponse.json(expenses)
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: error.message
                },
                {
                    status: 500
                }
            )
        }
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json()

        const newExpense = await prisma.expense.create({
            data: body
        })
        return NextResponse.json(newExpense,{
            status:201
        })
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: error.message
                },
                {
                    status: 500
                }
            )
        }
    }
}