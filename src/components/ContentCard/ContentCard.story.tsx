import React from 'react'
import { storiesOf } from '@storybook/react'
import ContentCard from './ContentCard'

// Import the global css
import '../../index.css'

storiesOf('Components', module).add('Content Card', () => (
  <div style={{ padding: '20px' }}>
    <ContentCard title="Title">Content</ContentCard>
  </div>
))
