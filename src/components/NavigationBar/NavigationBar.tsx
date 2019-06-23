import React, { useState } from 'react'
import styles from './NavigationBar.module.scss'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import useIsMobile from '../../hooks/useIsMobile'
import { FaGripLines } from 'react-icons/fa'
import LightBox from '../LightBox/LightBox';

const NavigationBar: React.FC<{
  title: string
  links: { label: string; href: string }[]
}> = ({ title, links }) => {
  const isMobile = useIsMobile()
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <Card className={styles.card}>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.links}>
          {isMobile ? (
            <>
              {showDrawer && <LightBox onClose={() => setShowDrawer(false)}>hello world</LightBox>}
              <FaGripLines className={`${styles.link} ${styles.skinnyLink}`} onClick={() => setShowDrawer(true)}/>
            </>
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
