import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function GET() {
    try {
        const prisma = new PrismaClient();

        const res = await prisma.user.findMany({
            orderBy: [
                {
                    levelId: 'desc'
                },
                {
                    curExperience: 'desc'
                }
            ],
            take: 10,
            select: {
                email: true,
                nickname: true,
                levelId: true,
                level: true,
                curExperience: true,
            }
        })

        return NextResponse.json(res);
    } catch (e) {
        console.log(e);
        return new NextResponse('Server Error', {
            status: 500
        })
    }



}