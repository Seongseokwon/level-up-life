import styles from './Layout.module.scss';
import {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (<div className={styles.container}>
        {children}
    </div>)
}