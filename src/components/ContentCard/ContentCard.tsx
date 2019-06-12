import React from 'react'
import styles from './ContentCard.module.scss'

const ContentCard: React.FC<{
  title: string
  children: React.ReactNode
}> = ({ title, children }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.title}>{title}</div>
        <div className={styles.bar} />
        <div className={styles.content}>
          {children}
        </div>
        <div className={styles.bar} />
      </div>
    </div>
  )
}

export default ContentCard
