import React from 'react';
import { storiesOf } from '@storybook/react'
import App from './App'

storiesOf('Pages', module)
  .add('/about', () => <App />)
