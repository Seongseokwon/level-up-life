import styles from './Todo.module.scss';

import ProgressBar from "@/components/progress/ProgressBar";

interface TodoHeaderProps {
    selectedDate: Date
}
export default function TodoHeader({selectedDate}: TodoHeaderProps) {
    const formattingDate = selectedDate.getFullYear() + '년 ' + (selectedDate.getMonth() + 1) + '월' + selectedDate.getDate() + '일';

    return <header className={styles['todo-header']}>
        <div className={styles['selected-date']}>{formattingDate}</div>
        <ProgressBar progress={{value: 2, max: 5}} />
    </header>
}