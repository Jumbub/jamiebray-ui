import React, { ReactNode } from 'react'
import styles from './Icon.module.scss'
import Card from '../Card/Card'

const Icon: React.FC<{
  onClick?: () => void
  highlight?: boolean
  render: (className: string) => ReactNode
}> = ({ onClick, highlight, render }) => {
  const highlightClass = highlight && styles.highlight || ''
  return (
    <Card
      className={`${styles.iconCard} ${highlightClass}`}
      onClick={onClick}
    >
      {render(styles.icon)}
    </Card>
  )
}

export default Icon
