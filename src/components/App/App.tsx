import React from 'react'
import styles from './App.module.scss'
import NavigationBar from '../NavigationBar/NavigationBar'
import ContentCardAbout from '../ContentCardAbout/ContentCardAbout'
import ContentCardContact from '../ContentCardContact/ContentCardContact'
import { FULL_NAME } from '../../constants/personal'

const App: React.FC = () => {
  return (
    <div className={styles.outer}>
      <NavigationBar
        title={FULL_NAME}
        links={[
          { label: 'About', href: '/about' },
          // { label: 'Contact', href: '/contact' },
        ]}
      />
      <div className={styles.inner}>
        <ContentCardAbout />
        {/* <ContentCardContact /> */}
      </div>
    </div>
  )
}

export default App
