import React from 'react'
import styles from './NavigationBarLink.module.scss'
import { Link } from 'react-router-dom'

const NavigationBarLink: React.FC<{
  label: string
  href: string
  className: string
  onClick?: () => void
}> = ({ label, href, className, onClick }) => (
  <Link
    onClick={() => (onClick && onClick()) || {}}
    to={href}
    key={href}
    className={className}
  >
    {label}
  </Link>
)

export default NavigationBarLink
