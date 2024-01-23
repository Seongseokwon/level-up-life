import styles from './Calendar.module.scss';
import {useEffect, useState} from "react";
import Button from "@/components/ui/button/Button";

interface CalendarProps {
    toggleViewMode: () => void;
}

const dayOfTheWeek = ['일', '월', '화', '수', '목', '금', '토'];
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

        console.log('YEAR :', year, 'MONTH :', month)
        console.log(new Date(year, month, 1));
    }

    useEffect(() => {
        const calendar = generateMonthlyCalendar();
        setMonthly(calendar);
    }, []);

    return <div className={`${styles['calendar-container']}`}>
        <header className={`${styles['calendar-header']}`}>
            <button type='button' onClick={() => changeMonth(selectedDate, 'prev')}> prev</button>
            {selectedDate ? selectedDate.getFullYear() + '년' + selectedDate.getMonth() + 1 + '월' : ''}
            <button type='button' onClick={() => changeMonth(selectedDate, 'next')}> next</button>
        </header>
        <main className={`${styles['calendar-body']}`}>
            <section className={`${styles['calendar-grid']}`}>
                {dayOfTheWeek.map((day, i) => <div className={`${styles['calendar-day']}`} key={i}>{day}</div>)}
                {monthly.map((week) =>
                    week.map((day, i) =>
                        <div className={`${styles['calendar-day']}`} key={i}>
                            {day === 0 ? '' : <>{day}
                                <div className={'progress-circle completed'}></div>
                            </>}

                        </div>
                    )
                )
                }
            </section>
            <section className={`${styles['calendar-summary']}`}>
                <div className={`${styles['summary-item']}`}>
                    <div className='progress-circle completed'></div>
                    달성
                </div>
                <div className={`${styles['summary-item']}`}>
                    <div className='progress-circle failed'></div>
                    미달
                </div>
            </section>
        </main>


        <Button type='button' onClick={viewChange} size='xlg'>리스트 보기</Button>
    </div>
}