import styles from './Calendar.module.scss';
import {useEffect, useState} from "react";

interface CalendarProps {
    toggleViewMode: () => void;
}

export default function Calendar({toggleViewMode}: CalendarProps) {
    const [monthly, setMonthly] = useState<number[][]>([]);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const viewChange = () => {
        toggleViewMode();
    }
    const generateMonthlyCalendar = (selectDate = new Date()) => {
        const calendar = [];
        const temp = [];

        const year = selectDate.getFullYear();
        const month = selectDate.getMonth();

        let startDay = new Date(year, month, 1).getDay();
        const lastDayOfMonth = new Date(year, month + 1, 0).getDate()

        for (let i = 0; i < startDay; i++) {
            temp.push(0);
        }

        for (let i = 1; i <= lastDayOfMonth; i++) {
            temp.push(i)
        }

        while (temp.length > 0) {
            calendar.push(temp.splice(0, 7))
        }

        return calendar;
    }
    const changeMonth = (currentDate: Date, type: 'prev' | 'next'): void => {
        const year = currentDate.getFullYear();
        let month = 0;
        if (type === 'prev') {
            month = currentDate.getMonth() - 1;
        } else if (type === 'next') {
            month = currentDate.getMonth() + 1;
        }

        console.log('YEAR :', year,'MONTH :', month)
        console.log(new Date(year, month, 1));
    }

    useEffect(() => {
        const calendar = generateMonthlyCalendar();
        setMonthly(calendar);
    }, []);

    return <div className={`${styles['calendar-container']}`}>
        <nav className={`${styles['calendar-header']}`}>
            <button type='button' onClick={() => changeMonth(selectedDate, 'prev')}> prev</button>
            { selectedDate ? selectedDate.getFullYear() + '년' + selectedDate.getMonth()+ 1 +'월' : ''}
            <button type='button' onClick={() => changeMonth(selectedDate, 'next')}> next</button>
        </nav>
        <main className={`${styles['calendar-body']}`}>
            {monthly.map((week) =>
                week.map((day, i) =>
                    <div key={i}>{day}</div>
                )
            )
            }
        </main>
        <section>todo summary</section>
        <button type='button' onClick={viewChange}>리스트 보기</button>
    </div>
}