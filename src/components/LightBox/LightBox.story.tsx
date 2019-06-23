import React from 'react'
import { storiesOf } from '@storybook/react'
import LightBox from './LightBox'
import MockContent from '../../mocks/MockContent'
import { action } from '@storybook/addon-actions';

storiesOf('Components', module).add('Light Box', () => (
  <>
    <LightBox onClose={action('close')}>
      <MockContent label="content in lightbox"/>
    </LightBox>
    <div>
      <MockContent label="content behind"/>
    </div>
  </>
))
