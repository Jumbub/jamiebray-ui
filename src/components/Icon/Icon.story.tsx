import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from './Icon'
import { FaCopy } from 'react-icons/fa'
import { boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('Components', module).add('Icon', () => (
  <Icon
    highlight={boolean('highlight', false)}
    onClick={action('clicked')}
    render={className => <FaCopy className={className} />}
  />
))
