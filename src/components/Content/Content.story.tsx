import React from 'react'
import { storiesOf } from '@storybook/react'
import Content from './Content'

storiesOf('Components', module).add('Content', () => (
  <Content title="Title">
    Content
    <br />
    Goes here
  </Content>
))
