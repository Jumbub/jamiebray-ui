import React from 'react'
import { shallow } from 'enzyme';
import ContentCardAbout from './ContentCardAbout'

it('renders without crashing', () => {
  shallow(<ContentCardAbout />)
})
