import Layout from "@/components/layout/Layout";
import Button from "@/components/ui/button/Button";
import Form from "@/components/ui/form/Form";
import Input from "@/components/ui/input/Input";
import styles from "@/app/page.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
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
            <Form formTitle='회원가입'>
                <Input type='text' id='email' name='email' placeholder='이메일'/>
                <Input type='text' id='nickname' name='nickname' placeholder='닉네임'/>
                <Input type='password' id='password' name='password' placeholder='비밀번호'/>
                <Input type='password' id='passwordConfirm' name='passwordConfirm' placeholder='비밀번호 확인'/>
                <p className={`${styles['instructions_msg']}`}>계정이 있으신가요? <Link href={'/auth/login'}>로그인</Link></p>
                <Button type={'button'} colorStyle={"primary"}>회원가입</Button>
            </Form>
        </main>

    </Layout>
}