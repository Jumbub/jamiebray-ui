import React from 'react'
import ContentCard from './ContentCard'
import { shallow } from 'enzyme';

const basicProps = {
  title: 'Title here',
  children: 'Content here',
}

it('rendered the copy', () => {
  const copy = shallow(<ContentCard {...basicProps} />).text()
  expect(copy).toContain(basicProps.title)
  expect(copy).toContain(basicProps.children)
})
