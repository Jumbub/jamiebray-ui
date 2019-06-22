import React from 'react'
import styles from './App.module.scss'
import NavigationBar from '../NavigationBar/NavigationBar'
import ContentCardAbout from '../ContentCardAbout/ContentCardAbout'
import { FULL_NAME } from '../../constants/personal'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import ContentCardContact from '../ContentCardContact/ContentCardContact'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ContentCardResume from '../ContentCardResume/ContentCardResume';

const App: React.FC = () => {
  return (
    <div className={styles.outer}>
      <BrowserRouter>
        <NavigationBar
          title={FULL_NAME}
          links={[
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
            { label: 'Resume', href: '/resume' },
          ]}
        />
        <div className={styles.inner}>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={500}
                  classNames={{
                    enter: styles.fadeEnter,
                    enterActive: styles.fadeEnterActive,
                    exit: styles.fadeExit,
                    exitActive: styles.fadeExitActive,
                  }}
                >
                  <Switch location={location}>
                    <Route path="/about" component={ContentCardAbout}/>
                    <Route path="/contact" component={ContentCardContact} />
                    <Route path="/resume" component={ContentCardResume} />
                    <Route component={ContentCardAbout} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
