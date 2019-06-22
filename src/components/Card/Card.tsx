import React from 'react'
import styles from './Card.module.scss'

const Card: React.FC<{
  children: React.ReactNode
  inverted?: boolean
  className?: string
}> = ({ children, className = '', inverted }) => {
  return (
    <div
      className={`${styles.outer} ${inverted && styles.inverted || ''} ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
