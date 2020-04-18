import React from 'react';
import styles from './Card.module.scss';

export const Card: React.FC<{
  children: React.ReactNode;
  inverted?: boolean;
  className?: string;
  onClick?: () => void;
}> = ({ children, className = '', inverted, onClick = () => null }) => (
  <div
    className={`${styles.outer} ${(inverted && styles.inverted) || ''} ${className}`}
    onClick={onClick}
  >
    {children}
  </div>
);
