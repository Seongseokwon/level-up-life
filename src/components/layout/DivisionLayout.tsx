import {Fragment, ReactNode} from "react";
import styles from './Layout.module.scss';
import {LayoutStylesProps} from "@/components/layout/MainLayout";
import Header from "@/components/header/Header";
import BottomNavigation from "@/components/bottomNavigation/BottomNavigation";

interface DivisionLayoutProps extends LayoutStylesProps {
    children: ReactNode
}
export default function DivisionLayout({children, justifyContent = 'space-between'}: DivisionLayoutProps){
    const divisionLayoutClasses = `
        ${styles['container']}
        ${styles[justifyContent]}
    `
    return (<div className={divisionLayoutClasses}>
        <Header />
        {children}
        <BottomNavigation />
    </div>)
}