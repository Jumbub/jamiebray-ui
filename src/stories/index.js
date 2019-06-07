import React from 'react';

import { storiesOf } from '@storybook/react';
import App from '../components/App';

// Import the global css
import '../index.css';

storiesOf('App', module)
  .add('default', () => <App />);
