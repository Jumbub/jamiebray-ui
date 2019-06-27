import React from 'react'
import { shallow } from 'enzyme'
import NavigationBarLink from './NavigationBarLink'
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  shallow(
    <BrowserRouter>
      <NavigationBarLink
        label="About"
        href="/about"
        className="cssClassGoesHere"
        onClick={() => { }}
      />
    </BrowserRouter>
  )
})
