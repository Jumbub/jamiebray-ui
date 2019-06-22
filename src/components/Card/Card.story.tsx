import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from './Card'
import MockContent from '../../mocks/MockContent'
import { boolean, withKnobs } from '@storybook/addon-knobs'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('Card', () => (
  <Card inverted={boolean('Invert shadow', false)}>
    <MockContent />
  </Card>
))
