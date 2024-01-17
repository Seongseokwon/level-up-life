import {PrismaClient} from "@prisma/client";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
    try {
        const prisma = new PrismaClient();
        const id = parseInt(req.nextUrl.searchParams.get('levelId')!, 10);


        const level = await prisma.level.findUnique({
            where: {
                id
            }
        });
        return NextResponse.json(level);
    } catch (e) {
        console.log(e);
        return new NextResponse('Server Error', {
            status: 500
        })
    }

}
