import React from 'react'
import { storiesOf } from '@storybook/react'
import IconCard from './IconCard'
import { FaCopy } from 'react-icons/fa'
import { boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('Components', module).add('IconCard', () => (
  <IconCard
    highlight={boolean('highlight', false)}
    onClick={action('clicked')}
    render={className => <FaCopy className={className} />}
  />
))
