import React from 'react'
import { storiesOf } from '@storybook/react'
import NavigationBar from './NavigationBar'

storiesOf('Components', module).add('Navigation Bar', () => (
  <NavigationBar
    title="Title here"
    links={[
      { label: 'These', href: '/these' },
      { label: 'Are', href: '/are' },
      { label: 'Navigation', href: '/navigation' },
      { label: 'Links', href: '/links' },
    ]}
  />
))
