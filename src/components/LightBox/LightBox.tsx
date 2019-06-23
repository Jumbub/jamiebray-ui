import React, { ReactNode } from 'react';
import styles from './LightBox.module.scss'
import Card from '../Card/Card';

const LightBox: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className={styles.outer}>
      <Card>
        {children}
      </Card>
    </div>
  )
}

export default LightBox
