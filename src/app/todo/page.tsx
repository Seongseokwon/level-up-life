'use client';

import {useEffect, useState} from "react";
import DivisionLayout from "@/components/layout/DivisionLayout";
import Calendar from "@/components/calendar/Calendar";
import TodoTemplate from "@/components/todo/TodoTemplate";
import useModal from "@/hooks/useModal";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import Modal from "@/components/modal/Modal";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/lib/store";
import {closeModal} from "@/lib/slice/modal-slice";

export default function TodoPage() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [isCalendarMode, setIsCalendarMode] = useState<boolean>(true)

    const {isOpen} = useAppSelector((state) => state.modalReducer);
    const dispatch = useDispatch<AppDispatch>()
    const toggleViewMode = () => {
        setIsCalendarMode((prev) => !prev);
    }

    console.log('IS OPEN ', isOpen);
    const close = () => {
        dispatch(closeModal())
    }
    return <DivisionLayout>
        {
            isCalendarMode ?
                <Calendar toggleViewMode={toggleViewMode}
                          changeSelectedDate={(date: Date) => setSelectedDate((prev) => date)}
                          selectedDate={selectedDate}
                /> :
                <TodoTemplate toggleViewMode={toggleViewMode}
                          selectedDate={selectedDate}/>

        }
        {isOpen ? <Modal title={'할 일 등록'} modalType={'slideUp'} closeModal={close}>안녕하세요</Modal>: ''}

    </DivisionLayout>
}