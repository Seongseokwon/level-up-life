import {Fragment, ReactNode} from "react";
import styles from './Layout.module.scss';
import {LayoutStylesProps} from "@/components/layout/MainLayout";

interface DivisionLayoutProps extends LayoutStylesProps {
    children: ReactNode
}
export default function DivisionLayout({children, justifyContent = 'space-between'}: DivisionLayoutProps){
    const divisionLayoutClasses = `
        ${styles['container']}
        ${styles[justifyContent]}
    `
    return (<div className={divisionLayoutClasses}>
        <div> header</div>
        {children}
        <div> bottom navigation</div>
    </div>)
}