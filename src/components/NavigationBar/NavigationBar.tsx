import React from 'react'
import styles from './NavigationBar.module.scss'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'

const NavigationBar: React.FC<{
  title: string
  links: { label: string; href: string }[]
}> = ({ title, links }) => {
  return (
    <Card className={styles.card}>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.links}>
          {links.map(({ label, href }) => (
            <Link to={href} key={href}>
              <div className={styles.link}>
                {label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default NavigationBar
