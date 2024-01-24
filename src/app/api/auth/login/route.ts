import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {NextApiResponse} from "next";
import {checkHash, encryption} from "@/utils/encrypt";


export async function POST(req: NextRequest, res: NextApiResponse) {
    try {
        const prisma = new PrismaClient()
        const {email, password} = await req.json();

        const user = await prisma.user.findFirstOrThrow({
            where: {
                email
            },
        });

        if(!await checkHash(password, user.password)) {
            return new NextResponse('Password does not matched', {
                status: 401,
                statusText: 'Password does not matched'
            })
        }
        return NextResponse.json('');
    } catch (e) {
        return new NextResponse('Invalid user information', {
            status: 401,
            statusText: 'Invalid user information'
        })
    }
}