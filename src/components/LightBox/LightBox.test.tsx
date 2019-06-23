import React from 'react'
import { shallow } from 'enzyme';
import LightBox from './LightBox'

it('renders without crashing', () => {
  shallow(<LightBox onClose={() => { }}>Hello World</LightBox>)
})
