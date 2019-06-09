import React from 'react'
import styles from './NavigationBar.module.scss'

const NavigationBar: React.FC<{
  title: string
  links: { label: string; href: string }[]
}> = ({ title, links }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.title}>{title}</div>
        <div className={styles.links}>
          {links.map(({ label, href }) => (
            <div className={styles.link}>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
