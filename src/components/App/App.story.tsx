import React from 'react';
import { storiesOf } from '@storybook/react'
import App from './App'

// Import the global css
import '../../index.css';

storiesOf('Pages', module)
  .add('https://jamiebray.me', () => <App />)
