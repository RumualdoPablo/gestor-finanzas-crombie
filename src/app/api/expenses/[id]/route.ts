import { NextResponse } from "next/server";
import prisma from "@/libs/prisma"

export async function GET({ params }: { params: { id: string } }) {
    try {
        const id = Number(params.id)
        const expenses = await prisma.expense.findUnique({
            where: { id: id }
        })
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

export async function DELETE({ params }: { params: { id: string } }) {
    try {
        const id = Number(params.id)
        const deletedExpense = await prisma.expense.delete({
            where: { id: id }
        })
        return NextResponse.json(deletedExpense, {
            status: 201
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

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const { 
            description,
            amount,
            date,
            category } = await req.json();

        const updatedNote = await prisma.expense.update({
            where: {
                id: Number(params.id),
            },
            data: {
                description,
                amount,
                date,
            },
        });

        return NextResponse.json(updatedNote);
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