'use client';
import {useState} from "react";
import {useAppSelector} from "@/lib/hooks";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/lib/store";
import {closeModal, openModal} from "@/lib/slice/modal-slice";

export default function useModal() {
    const {isOpen} = useAppSelector((state) => state.modalReducer)
    const dispatch = useDispatch<AppDispatch>();

    const open = () => {
        if(isOpen) return;
        dispatch(openModal())
    };
    const close = () => {
        dispatch(closeModal())
    };

    return {
        open,
        close,
        isOpen
    }
}