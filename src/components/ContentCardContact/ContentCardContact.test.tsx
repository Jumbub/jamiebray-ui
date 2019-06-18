import React from 'react'
import { shallow } from 'enzyme';
import ContentCardContact from './ContentCardContact'

it('renders without crashing', () => {
  shallow(<ContentCardContact />)
})
