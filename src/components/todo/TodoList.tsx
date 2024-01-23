import styles from './Todo.module.scss';
import TodoItem from "@/components/todo/TodoItem";
import {useState} from "react";
import {PRIORITY} from "@/type/Todo";

interface TodoListProps {
    todoList: any[]
}

export default function TodoList({}: TodoListProps) {
    const [todoList, setTodoList] = useState(
        [
            {
                id: '1',
                title: 'todo 1',
                description: 'todo 1 description',
                priority: PRIORITY.MEDIUM,
                completed: false,
                createdAt: '2024-01-23'
            },
            {
                id: '2',
                title: 'todo 2',
                description: 'todo 2 description',
                priority: PRIORITY.MEDIUM,
                completed: false,
                createdAt: '2024-01-23'
            },
            {
                id: '3',
                title: 'todo 3',
                description: 'todo 3 description',
                priority: PRIORITY.MEDIUM,
                completed: false,
                createdAt: '2024-01-23'
            },
            {
                id: '4',
                title: 'todo 4',
                description: 'todo 4 description',
                priority: PRIORITY.MEDIUM,
                completed: false,
                createdAt: '2024-01-23'
            },
            {
                id: '5',
                title: 'todo 5',
                description: 'todo 5 description',
                priority: PRIORITY.MEDIUM,
                completed: false,
                createdAt: '2024-01-23'
            },
            {
                id: '6',
                title: 'todo 6',
                description: 'todo 6 description',
                priority: PRIORITY.MEDIUM,
                completed: false,
                createdAt: '2024-01-23'
            },
            {
                id: '7',
                title: 'todo 7',
                description: 'todo 7 description',
                priority: PRIORITY.MEDIUM,
                completed: false,
                createdAt: '2024-01-23'
            },
            {
                id: '8',
                title: 'todo 8',
                description: 'todo 8 description',
                priority: PRIORITY.MEDIUM,
                completed: false,
                createdAt: '2024-01-23'
            },
            {
                id: '9',
                title: 'todo 9',
                description: 'todo 9 description',
                priority: PRIORITY.MEDIUM,
                completed: false,
                createdAt: '2024-01-23'
            },
            {
                id: '10',
                title: 'todo 10',
                description: 'todo 10 description',
                priority: PRIORITY.MEDIUM,
                completed: false,
                createdAt: '2024-01-23'
            }

        ]
    )
    return <main className={styles['todo-list-container']}>
        {todoList.map((todo) => <TodoItem key={todo.id} todo={todo}/>)}
    </main>
}