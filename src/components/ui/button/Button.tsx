import {ReactNode} from "react";
import styles from './Button.module.scss';

type ButtonType = 'button' | 'reset' | 'submit';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xlg'
type ButtonColorStyle = 'default' | 'primary' | 'error';
interface ButtonStyleProps {
    size?: ButtonSize
    colorStyle?: ButtonColorStyle
}
interface ButtonOptionProps {
    id?: string,
    type: ButtonType,
    name?: string,
    children: ReactNode,
    onClick?: () => void
}
interface ButtonProps extends ButtonOptionProps, ButtonStyleProps {}


export default function Button({type, children, size, colorStyle, onClick}: ButtonProps) {

    const buttonClasses = `
        ${styles.button} 
        ${size ? styles[size] : ''}
        ${colorStyle? styles[colorStyle] : ''}
    `;

    return (
        <button className={buttonClasses} type={type} onClick={onClick}>{children}</button>
    )
}