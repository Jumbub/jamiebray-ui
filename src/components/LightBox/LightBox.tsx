import React, { ReactNode } from 'react'
import styles from './LightBox.module.scss'
import Card from '../Card/Card'

const LightBox: React.FC<{ children: ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  return (
    <div className={styles.outer} onClick={onClose}>
      <Card
        onClick={(e: KeyboardEvent) => {
          e.stopPropagation()
        }}
        className={styles.inner}
      >
        {children}
      </Card>
    </div>
  )
}

export default LightBox
