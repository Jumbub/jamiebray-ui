import React from 'react'
import { shallow } from 'enzyme';
import LightBox from './LightBox'

it('renders without crashing', () => {
  shallow(<LightBox >Hello World</LightBox>)
})
