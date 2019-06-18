import React from 'react'
import Card from './Card'
import { shallow } from 'enzyme';

const basicProps = {
  children: 'Content here',
}

it('rendered the copy', () => {
  const copy = shallow(<Card {...basicProps} />).html()
  expect(copy).toContain(basicProps.children)
})
