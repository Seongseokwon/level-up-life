import {Todo} from "@/type/Todo";
import styles from './Todo.module.scss';
import Circle from "@/components/Circle/Circle";
import Button from "../ui/button/Button";

interface TodoItemProps {
    todo: Todo
}

export default function TodoItem({todo}: TodoItemProps) {
    return <div className={styles['todo-item-container']}>
        <section className={`${styles['todo-checkbox']}`}>
            <input type="checkbox"/>
        </section>
        <section className={`${styles['todo-content']}`}>
            <div className={`${styles['title-box']}`}>
                <Circle circleStatus={'high'}/>
                <h3>{todo.title}</h3>
            </div>
            <div>
                {todo.description}
            </div>
        </section>
        <section className={`${styles['todo-control-box']}`}>
            <Button type={'button'} size={"xsm"} >삭제</Button>
        </section>
    </div>
}