import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import styles from '../../page.module.scss';
import Input from "@/components/ui/input/Input";
import Form from "@/components/ui/form/Form";
import Button from "@/components/ui/button/Button";

export default function LoginPage() {
    return <Layout justifyContent={'space-around'}>
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
            <Form formTitle='로그인'>
                <Input type='text' id='email' name='email' placeholder='이메일'/>
                <Input type='password' id='password' name='password' placeholder='비밀번호'/>
                <p className={`${styles['instructions_msg']}`}>계정이 없으신가요? <Link href={'/auth/signup'}>회원가입</Link></p>

                <Button type={'button'} colorStyle={"primary"}>로그인</Button>
            </Form>
        </main>
        <section className={`${styles['simple-login-section']}`}>
            <h4>간편 로그인</h4>
            <div className={'flex-box j_c'}>
                <Button type="button" size={'lg'}>비회원 로그인</Button>
                <Button type="button" size={'lg'}>구글 로그인</Button>
            </div>
        </section>
    </Layout>
}