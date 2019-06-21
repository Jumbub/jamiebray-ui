import React from 'react'
import NavigationBar from './NavigationBar'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

const basicProps = {
  title: 'Title here',
  links: [
    { label: 'These', href: '/these' },
    { label: 'Are', href: '/are' },
    { label: 'Navigation', href: '/navigation' },
    { label: 'Links', href: '/links' },
  ],
}

const createNavigationBar = () => (
  <BrowserRouter>
    <NavigationBar {...basicProps} />
  </BrowserRouter>
)

it('renders without crashing', () => {
  shallow(createNavigationBar())
})

it('rendered the copy', () => {
  const copy = shallow(createNavigationBar()).html()
  expect(copy).toContain(basicProps.title)
  basicProps.links.forEach(item => expect(copy).toContain(item.label))
})
