import styles from './Calendar.module.scss';
import {useEffect, useState} from "react";
import Button from "@/components/ui/button/Button";
import Circle from "@/components/circle/Circle";
import CalendarDay from "@/components/calendar/CalendarDay";

interface CalendarProps {
    selectedDate: Date;
    changeSelectedDate: (date: Date) => void;
    toggleViewMode: () => void;
}

const dayOfTheWeek = ['일', '월', '화', '수', '목', '금', '토'];
export default function Calendar({selectedDate, toggleViewMode, changeSelectedDate}: CalendarProps) {
    const [monthly, setMonthly] = useState<number[][]>([]);
    const [month, setMonth] = useState<Date>(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1));
    const viewChange = () => {
        toggleViewMode();
    }
    const generateMonthlyCalendar = (selectMonth = new Date()) => {
        const calendar = [];
        const temp = [];

        const year = selectMonth.getFullYear();
        const month = selectMonth.getMonth();

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
        console.log('YEAR :', year, 'MONTH :', month);
        setMonth((prev) => new Date(year, month, 1));
        generateMonthData(new Date(year, month, 1))
    }

    const generateMonthData = (date = new Date()) => {
        const calendar = generateMonthlyCalendar(date);
        setMonthly(() => calendar);
    }

    const selectDateChange = (day: number) => {
        //현재 보여지고 있는 달력의 클릭된 날짜로 선택된 날짜 변경
        console.log(day);
        changeSelectedDate(new Date(month.getFullYear(), month.getMonth(), day));
    }

    useEffect(() => {
        generateMonthData();
    }, []);

    return <div className={`${styles['calendar-container']}`}>
        <header className={`${styles['calendar-header']}`}>
            <button type='button' onClick={() => changeMonth(month, 'prev')}> prev</button>
            <h2>{month ? month.getFullYear() + '년 ' + (month.getMonth() + 1) + '월' : ''}</h2>
            <button type='button' onClick={() => changeMonth(month, 'next')}> next</button>
        </header>
        <main className={`${styles['calendar-body']}`}>
            <section className={`${styles['calendar-grid']}`}>
                {dayOfTheWeek.map((day, i) => <div className={`${styles['calendar-day']}`} key={i}>{day}</div>)}
                {monthly.map((week) =>
                     week.map((day, i) =>(

                         <CalendarDay key={i}
                                      day={day}
                                      selectedDate={selectedDate}
                                      currentShowMonth={month}
                                      selectDateChange={selectDateChange}
                         />)
                    )
                )
                }
            </section>
            <section className={`${styles['calendar-summary']}`}>
                <div className={`${styles['summary-item']}`}>
                    <Circle circleStatus='completed'>달성</Circle>
                </div>
                <div className={`${styles['summary-item']}`}>
                    <Circle circleStatus='failed'>미달</Circle>
                </div>
            </section>
        </main>


        <Button type='button' onClick={viewChange} size='xlg'>리스트 보기</Button>
    </div>
}