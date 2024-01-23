import {ReactNode} from "react";
import styles from './Circle.module.scss';

type CircleStatus = 'completed' | 'failed' | 'not-yet' | 'high' | 'medium' | 'low';
interface ProgressCircleStylesProps {
    circleStatus: CircleStatus
}
interface ProgressCircleProps extends ProgressCircleStylesProps {
    children?: ReactNode
}
export default function Circle({children, circleStatus = 'not-yet'}: ProgressCircleProps) {
    const progressCircleClasses = `${styles['circle']} ${styles[circleStatus]}`;
    return <>
        <div className={progressCircleClasses}></div>
        {children}
    </>

}