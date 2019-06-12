import React from 'react'
import Card from './Card'
import { shallow } from 'enzyme';

const basicProps = {
  title: 'Title here',
  children: 'Content here',
}

it('rendered the copy', () => {
  const copy = shallow(<Card {...basicProps} />).text()
  expect(copy).toContain(basicProps.title)
  expect(copy).toContain(basicProps.children)
})
