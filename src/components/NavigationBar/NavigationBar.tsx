import React from 'react'
import styles from './NavigationBar.module.scss'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import useIsMobile from '../../hooks/useIsMobile'
import { FaGripLines } from 'react-icons/fa'

const NavigationBar: React.FC<{
  title: string
  links: { label: string; href: string }[]
}> = ({ title, links }) => {
  const isMobile = useIsMobile()
  return (
    <Card className={styles.card}>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.links}>
          {isMobile ? (
            <FaGripLines className={`${styles.link} ${styles.skinnyLink}`}/>
          ) : (
            links.map(({ label, href }) => (
              <Link to={href} key={href} className={styles.link}>
                {label}
              </Link>
            ))
          )}
        </div>
      </div>
    </Card>
  )
}

export default NavigationBar
