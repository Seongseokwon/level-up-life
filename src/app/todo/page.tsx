'use client';

import {useState} from "react";
import DivisionLayout from "@/components/layout/DivisionLayout";
import Calendar from "@/components/ui/calendar/Calendar";
import TodoList from "@/components/todo/TodoList";

export default function TodoPage () {
    const [isCalendarMode, setIsCalendarMode] = useState<boolean>(true)
    const toggleViewMode = () => {
        setIsCalendarMode((prev) => !prev);
    }

    return <DivisionLayout>
        {
            isCalendarMode ?
                <Calendar toggleViewMode={toggleViewMode} /> :
                <TodoList toggleViewMode={toggleViewMode} />
        }

    </DivisionLayout>
}