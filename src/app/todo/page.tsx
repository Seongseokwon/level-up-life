'use client';

import {useState} from "react";
import DivisionLayout from "@/components/layout/DivisionLayout";
import Calendar from "@/components/calendar/Calendar";
import TodoTemplate from "@/components/todo/TodoTemplate";

export default function TodoPage() {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [isCalendarMode, setIsCalendarMode] = useState<boolean>(true)
    const toggleViewMode = () => {
        setIsCalendarMode((prev) => !prev);
    }

    return <DivisionLayout>
        {
            isCalendarMode ?
                <Calendar toggleViewMode={() => setIsCalendarMode((prev) => !prev)}
                          changeSelectedDate={(date: Date) => setSelectedDate((prev) => date)}
                          selectedDate={selectedDate}
                /> :
                <TodoTemplate toggleViewMode={() => setIsCalendarMode((prev) => !prev)}
                          selectedDate={selectedDate}/>
        }

    </DivisionLayout>
}