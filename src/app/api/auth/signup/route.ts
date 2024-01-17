import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import {emailValidator, passwordValidator} from "@/app/(utils)/validator";


export async function POST(req: Request) {
    try {
        const prisma = new PrismaClient();
        const {email, password, nickname} = await req.json();

        if(!emailValidator(email)) {
            return new NextResponse('Email Format Error', {
                status: 400
            })
        }

        const emailAlreadyExist = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if(emailAlreadyExist) {
            return new NextResponse('Email Already Exist', {
                status: 400
            })
        }

        if(!passwordValidator(password)) {
            return new NextResponse('Password Format Error', {
                status: 400
            })
        }

        const nicknameAlreadyExist = await prisma.user.findFirst({
            where: {
                nickname
            }
        })

        if(emailAlreadyExist) {
            return new NextResponse('Nickname Already Exist', {
                status: 400
            })
        }

        const res = await prisma.user.create({
            data: {
                email,
                password,
                nickname
            }
        })
        return NextResponse.json({message: 'Login Success'});
    } catch (e) {
        console.log(e);
        return new NextResponse('Server Error', {
            status: 500
        })
    }
}