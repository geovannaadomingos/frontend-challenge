import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
    value: number;
}

export function ProgressBar({ value }: ProgressBarProps) {
    return (
        <div className={styles.container}>
            <div
                className={styles.bar}
                style={{ width: `${value}%` }}
            />
        </div>
    );
}
