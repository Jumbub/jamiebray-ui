import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import styles from './NavigationBarLink.module.scss'
import useReactRouter from 'use-react-router'
import classNames from 'classnames'

const NavigationBarLink: React.FC<{
  label: string
  href: string
  className?: string
  onClick?: () => void
}> = ({ label, href, className, onClick }) => {
  const { location } = useReactRouter()
  const activeLocation = location.pathname === href

  const link = (
    <Link
      onClick={() => (onClick && onClick()) || {}}
      to={href}
      key={href}
      className={classNames(styles.link, className, {
        [styles.disabled]: activeLocation,
      })}
    >
      {label}
    </Link>
  )

  return activeLocation ? <Card>{link}</Card> : link
}
export default NavigationBarLink
