import {ReactNode} from "react";
import styles from './Circle.module.scss';

type CircleStatus = 'completed' | 'failed' | 'not-yet' | 'high' | 'medium' | 'low';
interface ProgressCircleStylesProps {
    circleStatus: CircleStatus,
    size?: ''| 'sm' | 'md' | 'lg'

}
interface ProgressCircleProps extends ProgressCircleStylesProps {
    children?: ReactNode
}
export default function Circle({children, circleStatus = 'not-yet', size = ''}: ProgressCircleProps) {
    const progressCircleClasses = `${styles['circle']} ${styles[circleStatus]} ${styles[size]}`;
    return <>
        <div className={progressCircleClasses}></div>
        {children}
    </>

}