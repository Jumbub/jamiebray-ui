import React from 'react';

import { storiesOf } from '@storybook/react';
import App from '../components/App/App';

// Import the global css
import '../index.css';

storiesOf('Complex Components', module)
  .add('jamiebray.me', () => <App />);

storiesOf('Individual Components', module)
  .add('Action Bar', () => <App />);
