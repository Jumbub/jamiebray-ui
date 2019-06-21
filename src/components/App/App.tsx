import React from 'react'
import styles from './App.module.scss'
import NavigationBar from '../NavigationBar/NavigationBar'
import ContentCardAbout from '../ContentCardAbout/ContentCardAbout'
import { FULL_NAME } from '../../constants/personal'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import ContentCardContact from '../ContentCardContact/ContentCardContact';

const App: React.FC = () => {
  return (
    <div className={styles.outer}>
      <BrowserRouter>
        <NavigationBar
          title={FULL_NAME}
          links={[
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ]}
        />
        <div className={styles.inner}>
          <Switch>
            <Route path="/about" component={ContentCardAbout}/>
            <Route path="/contact" component={ContentCardContact}/>
            <Route component={ContentCardAbout} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
