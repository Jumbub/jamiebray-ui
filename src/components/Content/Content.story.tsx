import React from 'react'
import { storiesOf } from '@storybook/react'
import Content from './Content'
import MockContent from '../../mocks/MockContent'

storiesOf('Components', module).add('Content', () => (
  <Content title="Title">
    <MockContent />
  </Content>
))
