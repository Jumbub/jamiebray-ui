import React from 'react'
import styles from './NavigationBarLink.module.scss'
import { Link, withRouter } from 'react-router-dom'
import Card from '../Card/Card'
import useReactRouter from 'use-react-router'

const NavigationBarLink: React.FC<{
  label: string
  href: string
  className: string
  onClick?: () => void
}> = ({ label, href, className, onClick }) => {
  const { location } = useReactRouter();

  const link = (
    <Link
      onClick={() => (onClick && onClick()) || {}}
      to={href}
      key={href}
      className={className}
    >
      {label}
    </Link>
  )

  return location.pathname === href ? <Card>{link}</Card> : link
}
export default NavigationBarLink
