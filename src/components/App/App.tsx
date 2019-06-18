import React from 'react'
import styles from './App.module.scss'
import NavigationBar from '../NavigationBar/NavigationBar'
import ContentCardAbout from '../ContentCardAbout/ContentCardAbout'
import { FULL_NAME } from '../../constants/personal'

const App: React.FC = () => {
  return (
    <div className={styles.outer}>
      <NavigationBar
        title={FULL_NAME}
        links={[
          { label: 'About', href: '/about' },
        ]}
      />
      <div className={styles.inner}>
        <ContentCardAbout />
      </div>
    </div>
  )
}

export default App
