import React, { ReactNode } from 'react';
import { Card } from '../Card/Card';
import styles from './LightBox.module.scss';

const LightBox: React.FC<{ children: ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}) => (
  <div className={styles.outer} onClick={onClose}>
    <Card className={styles.inner}>{children}</Card>
  </div>
);

// eslint-disable-next-line import/no-default-export
export default LightBox;
