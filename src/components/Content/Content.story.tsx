import React from 'react'
import { storiesOf } from '@storybook/react'
import Content from './Content'
import MockContent from '../../mocks/MockContent'
import { text } from '@storybook/addon-knobs';

storiesOf('Components', module)
  .add('Content', () => (
  <Content title={text('title', 'Example Title')}>
    <MockContent />
  </Content>
))
