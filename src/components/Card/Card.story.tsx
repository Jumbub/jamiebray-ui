import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from './Card'
import MockContent from '../../mocks/MockContent'

storiesOf('Components', module).add('Card', () => (
  <Card>
    <MockContent />
  </Card>
))
