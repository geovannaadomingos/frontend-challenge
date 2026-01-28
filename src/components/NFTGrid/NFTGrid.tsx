import { ReactNode } from 'react';
import styles from './NFTGrid.module.scss';

interface NFTGridProps {
  children: ReactNode;
}

export function NFTGrid({ children }: NFTGridProps) {
  return (
    <section className={styles.grid}>
      {children}
    </section>
  );
}
