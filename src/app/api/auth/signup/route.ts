import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
import {emailValidator, passwordValidator} from "@/utils/validator";
import {encryption} from "@/utils/encrypt";


export async function POST(req: Request) {
    try {
        const prisma = new PrismaClient();
        const {email, password, nickname} = await req.json();

        if(!emailValidator(email)) {
            return new NextResponse('Email Format Error', {
                status: 400,
                statusText: 'Email format error'
            })
        }

        const emailAlreadyExist = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if(emailAlreadyExist) {
            return new NextResponse('Email Already Exist', {
                status: 400,
                statusText: 'Email already exist'
            })
        }

        if(!passwordValidator(password)) {
            return new NextResponse('Password Format Error', {
                status: 400,
                statusText:'Password format error'
            })
        }

        const nicknameAlreadyExist = await prisma.user.findFirst({
            where: {
                nickname
            }
        })

        if(nicknameAlreadyExist) {
            return new NextResponse('Nickname Already Exist', {
                status: 400,
                statusText: 'Nickname already exist'
            })
        }

        const encryptPassword = await encryption(password);
        const res = await prisma.user.create({
            data: {
                email,
                password: encryptPassword,
                nickname
            }
        })
        return NextResponse.json({message: 'Signup Success'});
    } catch (e) {
        console.log(e);
        return new NextResponse('Server Error', {
            status: 500
        })
    }
}