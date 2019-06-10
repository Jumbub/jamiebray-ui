import React from 'react'
import ReactDOM from 'react-dom'
import NavigationBar from './NavigationBar'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <NavigationBar
      title="Title here"
      links={[
        { label: 'These', href: '/these' },
        { label: 'Are', href: '/are' },
        { label: 'Navigation', href: '/navigation' },
        { label: 'Links', href: '/links' },
      ]}
    />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
