import styles from './Layout.module.scss';
import {ReactNode} from "react";

interface LayoutProps {
    children: ReactNode
    justifyContent?: 'center' | 'space-between' | 'space-around'
}

export default function Layout({children, justifyContent = 'center'}: LayoutProps) {
    return (<div className={`${styles['container']} ${styles[justifyContent]}`}>
        {children}
    </div>)
}