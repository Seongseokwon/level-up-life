import styles from './Progress.module.scss';

interface ProgressBarProps {
    progress: {
        value: number;
        max: number;
    };
}

export default function ProgressBar({progress: {value, max}}: ProgressBarProps){
    const width = max === 0 ? 0 : (value / max) * 100;
    return (
        <div className={styles["progress-bar"]}>
            <div
                className={styles["progress-bar__progress"]}
                style={{ width: `${width}%` }}
            />
        </div>
    );
}