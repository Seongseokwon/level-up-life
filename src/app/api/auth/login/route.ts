import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";


export async function POST(req: NextRequest) {
    const prisma = new PrismaClient()
    const {email, password} = await req.json();

    const user = await prisma.user.findFirstOrThrow({
        where: {
            email,
            password
        },
        
    });
    console.log(user);

    return NextResponse.json(user);
}