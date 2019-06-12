import React from 'react'
import { storiesOf } from '@storybook/react'
import Content from './Content'

// Import the global css
import '../../index.css'

storiesOf('Components', module).add('Content', () => (
  <Content title="Title">
    Content
    <br />
    Goes here
  </Content>
))
