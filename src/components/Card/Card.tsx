import React from 'react'
import styles from './Card.module.scss'

const Card: React.FC<{
  children: React.ReactNode
  inverted?: boolean
  className?: string
}> = ({ children, className = '', inverted }) => {
  const outerModifier = (inverted && styles.inverted) || ''
  return (
    <div className={`${styles.outer} ${outerModifier} ${className}`}>
      {children}
    </div>
  )
}

export default Card
