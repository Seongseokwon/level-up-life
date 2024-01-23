import {ReactNode} from "react";

type ProgressStatus = 'completed' | 'failed' | 'not-yet'
interface ProgressCircleStylesProps {
    progressStatus: ProgressStatus
}
interface ProgressCircleProps extends ProgressCircleStylesProps {
    children?: ReactNode
}
export default function ProgressCircle({children, progressStatus = 'not-yet'}: ProgressCircleProps) {
    const progressCircleClasses = `progress-circle ${progressStatus}`;
    return <>
        <div className={progressCircleClasses}></div>
        {children}
    </>

}