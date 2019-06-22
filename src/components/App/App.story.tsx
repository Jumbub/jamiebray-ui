import React from 'react';
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y';
import App from './App'

storiesOf('Content', module)
  .addDecorator(withA11y)
  .add('App', () => <App />)
