'use client';

import {ReactNode, useRef} from "react";
import {AppStore, makeStore} from "@/lib/store";
import {Provider} from "react-redux";

interface StoreProviderProps {
    children: ReactNode
}

export default function StoreProvider({children}: StoreProviderProps) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}