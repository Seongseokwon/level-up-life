import {PrismaClient} from '@prisma/client';
import {NextRequest, NextResponse} from "next/server";

function formatSearchDate(date: string) {
    const selectDate = new Date(date);

    const startDate = new Date(selectDate.getFullYear(), selectDate.getMonth(), selectDate.getDate() - 1, 15);
    const endDate = new Date(selectDate.getFullYear(), selectDate.getMonth(), selectDate.getDate(), 23, 59, 59);

    return {startDate, endDate}
}

export async function GET(req: NextRequest) {
    try {
        const prisma = new PrismaClient();
        const selectDate = req.nextUrl.searchParams.get('selectDate');
        const userId = req.nextUrl.searchParams.get('userId');

        const {startDate, endDate} = formatSearchDate(selectDate!);

        const res = await prisma.todo.findMany({
            where: {
                userId: parseInt(userId!, 10),
                createdAt: {
                    gte: startDate,
                    lte: endDate
                }
            }
        })

        return NextResponse.json(res);
    } catch (e) {
        return new NextResponse('Server Error', {
            status: 500
        })
    }

}

export async function PATCH(req: NextRequest) {
    try {
        const prisma = new PrismaClient();
        const {id, completed} = await req.json();
        const res = await prisma.todo.update({
            where: {
                id
            },
            data: {
                completed
            }
        })
        return NextResponse.json(res);
    } catch (e) {
        console.log(e);
        return new NextResponse('', {
            status: 500
        })
    }

}

export async function DELETE(req:NextRequest) {
    try {
        const prisma = new PrismaClient();
        const { id } = await req.json();

        const res = await prisma.todo.delete({
            where: {id}
        })

        return NextResponse.json(res);
    } catch (e) {
        return new NextResponse('', {
            status: 500
        })
    }

}