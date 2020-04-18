import React from 'react';
import styles from './Content.module.scss';

const Content: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className={styles.container}>
    <div className={styles.title}>{title}</div>
    <div className={styles.bar} />
    <div className={styles.content}>{children}</div>
    <div className={styles.bar} />
  </div>
);

// eslint-disable-next-line import/no-default-export
export default Content;
