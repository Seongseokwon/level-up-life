'use client';

import Layout from "@/components/layout/Layout";
import Button from "@/components/ui/button/Button";
import Form from "@/components/ui/form/Form";
import Input from "@/components/ui/input/Input";
import styles from "@/app/page.module.scss";
import Link from "next/link";
import Image from "next/image";
import {ChangeEvent, FormEvent, useState} from "react";
import {SignupInformation} from "@/type/User";
import {emailValidator, passwordValidator} from "@/utils/validator";
import {encrypt} from "next/dist/server/app-render/action-encryption-utils";
import {encryption} from "@/utils/encrypt";
import {useRouter} from "next/navigation";

export default function SignupPage() {
    const router = useRouter()
    const [information, setInformation] = useState<SignupInformation>({
        email: '',
        password: '',
        passwordConfirm: '',
        nickname: ''
    })

    const [error, setError] = useState<string>('');


    const informationValidator = (type: string, value: string): void => {
        if (type === 'email') {
            if (!emailValidator(value)) {
                setError('이메일 형식이 올바르지 않습니다');
            } else {
                setError('');
            }
        }

        if (type === 'nickname') {
            if (value.trim().length === 0 || value.trim().length < 2) {
                setError('닉네임은 2글자 이상이어야 합니다.');
            } else {
                setError('')
            }
        }

        if (type === 'password') {
            if (!passwordValidator(value)) {
                setError('비밀번호 형식이 올바르지 않습니다.');
            } else if (information.passwordConfirm.length > 0 && value !== information.passwordConfirm) {
                setError('비밀번호와 비밀번호 확인 값이 다릅니다.');
            } else {
                setError('')
            }
        }

        if (type === 'passwordConfirm') {
            if (!passwordValidator(value)) {
                setError('비밀번호 형식이 올바르지 않습니다.');
            } else if (value !== information.password) {
                setError('비밀번호와 비밀번호 확인 값이 다릅니다.');
            } else {
                setError('')
            }
        }
    }


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {target: {name, value}} = e

        informationValidator(name, value);
        setInformation((prev) => ({...prev, [name]: value}));
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const finished = error.trim().length === 0;
        if (!finished) return;
        const encryptInfo = {...information, password: information.password + process.env.NEXT_PUBLIC_ENCRYPT_SALT}

        const res = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(encryptInfo)
        });
        if (!res.ok) {
            // status text 팝업 보여주기
            console.log('Error');
        }
        router.push('/auth/login');
    }
    return <Layout>
        <section className={`${styles['logo-section']}`}>
            <Image
                src="/level-up-life-logo.png"
                alt="level up life logo"
                width={150}
                height={150}
                priority
            />
            <h1>
                Level Up Life
            </h1>
        </section>
        <main className={`${styles['main-section']}`}>
            <Form formTitle='회원가입' onSubmit={onSubmit}>
                <Input type='text' value={information.email} id='email' name='email' placeholder='이메일'
                       onChange={onChange}/>
                <Input type='text' value={information.nickname} id='nickname' name='nickname' placeholder='닉네임'
                       onChange={onChange}/>
                <Input type='password' value={information.password} id='password' name='password' placeholder='비밀번호'
                       onChange={onChange}/>
                <Input type='password' value={information.passwordConfirm} id='passwordConfirm' name='passwordConfirm'
                       placeholder='비밀번호 확인'
                       onChange={onChange}/>
                <p className={`${styles['instructions_msg']}`}>계정이 있으신가요? <Link href={'/auth/login'}>로그인</Link></p>
                {error.length > 0 ? <p className={`${styles['error-msg']}`}>{error}</p> : ''}
                <Button type={'submit'} colorStyle={"primary"}>회원가입</Button>
            </Form>
        </main>

    </Layout>
}