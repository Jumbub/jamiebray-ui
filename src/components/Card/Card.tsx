import React from 'react'
import styles from './Card.module.scss'

const Card: React.FC<{
  children: React.ReactNode
  inverted?: boolean
  className?: string
  onClick?: (e?: any) => void
}> = ({ children, className = '', inverted, onClick = () => { } }) => {
  const outerModifier = (inverted && styles.inverted) || ''
  return (
    <div className={`${styles.outer} ${outerModifier} ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}

export default Card
