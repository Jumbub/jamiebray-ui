import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from './Card'
import MockContent from '../../mocks/MockContent'
import { boolean } from '@storybook/addon-knobs'

storiesOf('Components', module)
  .add('Card', () => (
  <Card inverted={boolean('Invert shadow', false)}>
    <MockContent />
  </Card>
))
