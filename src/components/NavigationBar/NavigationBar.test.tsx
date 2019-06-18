import React from 'react'
import NavigationBar from './NavigationBar'
import { shallow } from 'enzyme'

const basicProps = {
  title: 'Title here',
  links: [
    { label: 'These', href: '/these' },
    { label: 'Are', href: '/are' },
    { label: 'Navigation', href: '/navigation' },
    { label: 'Links', href: '/links' },
  ],
}

it('renders without crashing', () => {
  shallow(<NavigationBar {...basicProps} />)
})

it('rendered the copy', () => {
  const copy = shallow(<NavigationBar {...basicProps} />).html()
  expect(copy).toContain(basicProps.title)
  basicProps.links.forEach(item => expect(copy).toContain(item.label))
})
