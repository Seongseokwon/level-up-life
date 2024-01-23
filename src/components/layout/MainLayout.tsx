import styles from './Layout.module.scss';
import {ReactNode} from "react";
export interface LayoutStylesProps {
    justifyContent?: 'center' | 'space-between' | 'space-around'
}
interface MainLayoutProps  extends LayoutStylesProps {
    children: ReactNode
}

export default function MainLayout({children, justifyContent = 'center'}: MainLayoutProps) {
    return (<div className={`${styles['container']} ${styles[justifyContent]}`}>
        {children}
    </div>)
}