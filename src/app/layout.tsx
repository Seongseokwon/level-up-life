import type {Metadata} from 'next'
import './styles/global.scss';
import StoreProvider from "@/app/StoreProvider";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: 'Level Up Life',
    description: '레벨을 올리는 투두 앱',
}

export default function RootLayout({children}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <StoreProvider>
            <div id='modal'></div>
            <div className={'root-container'}>
                {children}
            </div>
        </StoreProvider>
        </body>
        </html>
    )
}
