import styles from './LoadMore.module.scss';
import { ProgressBar } from '@/components/ProgressBar/ProgressBar';

interface LoadMoreProps {
    progress: number;
    hasMore: boolean;
    onLoadMore: () => void;
}

export function LoadMore({ progress, hasMore, onLoadMore }: LoadMoreProps) {
    return (
        <div className={styles.wrapper}>
            <ProgressBar value={progress} />

            <button
                className={styles.button}
                onClick={onLoadMore}
                disabled={!hasMore}
            >
                {hasMore ? 'Carregar mais' : 'Você já viu tudo'}
            </button>
        </div>
    );
}
