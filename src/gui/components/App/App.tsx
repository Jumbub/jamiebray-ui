import React, { ReactNode } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FULL_NAME } from '../../constants/personal';
import { usePathName } from '../../hooks/usePathName';
import NavigationBar from '../NavigationBar/NavigationBar';
import styles from './App.module.scss';

export const App = ({ children }: { children: ReactNode }) => (
  <div className={styles.outer}>
    <NavigationBar
      title={FULL_NAME}
      links={[
        { label: 'About', href: '/about' },
        { label: 'Resume', href: '/resume' },
        { label: 'Contact', href: '/contact' },
      ]}
    />
    <div className={styles.inner}>
      <TransitionGroup>
        <CSSTransition
          key={usePathName()}
          timeout={600}
          classNames={{
            enterActive: styles.fadeEnterActive,
            exitActive: styles.fadeExitActive,
          }}
        >
          {children}
        </CSSTransition>
      </TransitionGroup>
    </div>
  </div>
);
