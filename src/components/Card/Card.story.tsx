import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from './Card'

// Import the global css
import '../../index.css'

storiesOf('Components', module).add('Card', () => (
  <Card>Content goes here</Card>
))
