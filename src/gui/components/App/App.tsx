import React, { ReactNode, useState, useEffect, useMemo } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FULL_NAME } from '../../constants/personal';
import { usePathName } from '../../hooks/usePathName';
import NavigationBar from '../NavigationBar/NavigationBar';
import { ResumeContext } from '../Resume/ResumeContext';
import { useResumeHtml } from '../Resume/useResumeHtml';
import styles from './App.module.scss';
import { useRedirectedPathName } from '../../hooks/useRedirectPathName';

export const App = ({ children }: { children: ReactNode }) => {
  const shouldPreloadResume = useRedirectedPathName() !== '/resume';
  const preloadedResume = useResumeHtml(shouldPreloadResume);

  const links = useMemo(
    () => [
      { label: 'About', href: '/about' },
      { label: 'Resume', href: '/resume' },
      { label: 'Contact', href: '/contact' },
    ],
    [],
  );

  return (
    <ResumeContext.Provider value={preloadedResume}>
      <div className={styles.outer}>
        <NavigationBar title={FULL_NAME} links={links} />
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
    </ResumeContext.Provider>
  );
};
