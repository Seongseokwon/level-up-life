import {FormEvent, ReactNode} from "react";
import styles from './Form.module.scss';

interface FormProps {
    formTitle: string,
    children: ReactNode,
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}
export default function Form({formTitle, children, onSubmit}: FormProps) {
    return <form className={`${styles['form']}`} onSubmit={onSubmit}>
        <h2>{formTitle}</h2>
        {children}
    </form>
}