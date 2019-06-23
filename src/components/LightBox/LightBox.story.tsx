import React from 'react'
import { storiesOf } from '@storybook/react'
import LightBox from './LightBox'
import MockContent from '../../mocks/MockContent'

storiesOf('Components', module).add('Light Box', () => (
  <>
    <LightBox>
      <MockContent label="content in lightbox"/>
    </LightBox>
    <div>
      <MockContent label="content behind"/>
    </div>
  </>
))
