import {ChangeEvent, HTMLInputTypeAttribute} from "react";
import styles from './Input.module.scss';

interface InputOptionProps {
    id: string,
    type: HTMLInputTypeAttribute,
    name: string,
    placeholder: string,
    value?: string | number | readonly string[]
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
interface InputProps extends InputOptionProps{};
export default function Input({id, type, name, placeholder, value, onChange}: InputProps) {
    return (
        <input className={`${styles['input']}`} type={type} id={id} name={name} placeholder={placeholder}/>
    )
}