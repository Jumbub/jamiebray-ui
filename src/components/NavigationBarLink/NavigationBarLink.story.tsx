import React from 'react'
import { storiesOf } from '@storybook/react'
import NavigationBarLink from './NavigationBarLink'
import { action } from '@storybook/addon-actions'
import { BrowserRouter } from 'react-router-dom'

storiesOf('Components', module).add('Navigation Bar Link', () => (
  <BrowserRouter>
    <NavigationBarLink
      label="About"
      href="/about"
      className="cssClassGoesHere"
      onClick={() => action('clicked')}
    />
  </BrowserRouter>
))
