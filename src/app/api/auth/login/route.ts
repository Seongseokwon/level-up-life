import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {NextApiResponse} from "next";


export async function POST(req: NextRequest, res: NextApiResponse) {
    try {
        const prisma = new PrismaClient()
        const {email, password} = await req.json();

        const user = await prisma.user.findFirstOrThrow({
            where: {
                email,
                password
            },

        });
        return NextResponse.json(user);
    } catch (e) {
        return new NextResponse('Invalid User information', {
            status: 401
        })
    }
}