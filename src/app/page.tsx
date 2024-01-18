'use client';

import Image from 'next/image'
import Layout from "@/components/layout/Layout";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import styles from './page.module.scss';

export default function Home() {
    const router = useRouter();
    const [fade, setFade] = useState<'in' | 'out'>('in');

    // useEffect(() => {
    //   const animationTimer = setTimeout(() => {
    //       setFade('out');
    //   }, 1250)
    //     const routingTimer = setTimeout(() => {
    //         router.push('/auth/login');
    //     }, 2050)
    //   return () => {
    //       clearTimeout(animationTimer);
    //       clearTimeout(routingTimer)
    //   }
    // }, [router])
    const onClick = () => {
        router.push('/auth/login');
    }

    return (
        <Layout>
            <section role='presentation' className={`${styles['main-logo']} fade-box ${fade}`} onClick={onClick}>
                <Image
                    src="/level-up-life-logo.png"
                    alt="level up life logo"
                    width={250}
                    height={250}
                    priority
                />
            </section>
            <section className={`fade-box ${fade}`}>
                <h1 className={styles['main-title']}>
                    Level Up Life
                </h1>
            </section>
        </Layout>
    )
}
