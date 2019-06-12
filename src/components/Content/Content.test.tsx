import React from 'react'
import Content from './Content'
import { shallow } from 'enzyme';

const basicProps = {
  title: 'Title here',
  children: 'Content here',
}

it('rendered the copy', () => {
  const copy = shallow(<Content {...basicProps} />).text()
  expect(copy).toContain(basicProps.title)
  expect(copy).toContain(basicProps.children)
})
