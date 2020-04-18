import React, { ReactNode } from 'react';
import { Card } from '../Card/Card';
import styles from './IconCard.module.scss';

const IconCard: React.FC<{
  onClick?: () => void;
  highlight?: boolean;
  render: (className: string) => ReactNode;
}> = ({ onClick, highlight, render }) => (
  <Card className={`${styles.iconCard} ${(highlight && styles.highlight) || ''}`} onClick={onClick}>
    {render(styles.icon)}
  </Card>
);

// eslint-disable-next-line import/no-default-export
export default IconCard;
