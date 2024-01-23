import styles from './Calendar.module.scss';
import ProgressCircle from "@/components/progress-circle/ProgressCircle";

interface CalendarDayProps {
    day: number
    selectedDate: Date
    currentShowMonth: Date
    selectDateChange: (date: number) => void
}

export default function CalendarDay({day, selectedDate, currentShowMonth, selectDateChange}: CalendarDayProps) {

    const selectedDateClass =
        (selectedDate.getFullYear() + selectedDate.getMonth()) ===
        (currentShowMonth.getFullYear() + currentShowMonth.getMonth())
        && day === selectedDate.getDate();

    const calendarDayClasses =
        day === 0 ? '' :
            `${styles['calendar-day']} ${selectedDateClass ? `${styles['selected']}` : ''}`;

    return <div role='presentation' className={calendarDayClasses} onClick={() => selectDateChange(day)}>
        {day !== 0 ? <>
                {day}
                <ProgressCircle progressStatus='not-yet'/>
            </>
            : ''}

    </div>
}