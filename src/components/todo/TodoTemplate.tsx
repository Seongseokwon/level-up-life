import Button from "@/components/ui/button/Button";
import TodoHeader from "@/components/todo/TodoHeader";
import TodoList from "@/components/todo/TodoList";
import styles from './Todo.module.scss';
import useModal from "@/hooks/useModal";
import Modal from "@/components/modal/Modal";

interface TodoTemplateProps {
    selectedDate: Date;
    toggleViewMode: () => void;
}

export default function TodoTemplate({selectedDate, toggleViewMode}: TodoTemplateProps) {
    const viewChange = () => {
        toggleViewMode();
    }

    return (<div className={styles['todo-container']}>
        <TodoHeader selectedDate={selectedDate}/>
        <TodoList todoList={[]}/>
        <Button type='button' onClick={viewChange} size='xlg'>달력 보기</Button>
    </div>)
}