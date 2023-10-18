import { NextResponse } from "next/server";
import prisma from "@/libs/prisma"

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const id = Number(params.id)
        const expense = await prisma.expense.findUnique({
            where: { id: id }
        })

        if (expense) { //Si se encuentra el gasto, devuelve 200 OK con los datos
            return NextResponse.json(expense, { status: 200 })
        } else {
            return new NextResponse(JSON.stringify({ message: "Gasto no encontrado" }), { status: 404 })
        }

    } catch (error) {
        if (error instanceof Error) {
            return new NextResponse(JSON.stringify({ message: error.message }), { status: 500 })
        }
    }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
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
            category
        } = await req.json();

        const updatedExpense = await prisma.expense.update({
            where: {
                id: Number(params.id),
            },
            data: {
                description,
                amount,
                date,
                category
            },
        });

        if (updatedExpense) {
            return NextResponse.json(updatedExpense);
        } else {
            return NextResponse.json({ message: 'No data found' }, { status: 404 });
        }
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: error.message
                },
                {
                    status: 500
                }
            );
        }
    }
}