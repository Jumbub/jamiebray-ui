import React from 'react'
import { shallow } from 'enzyme'
import IconCard from './IconCard'

it('renders without crashing', () => {
  shallow(
    <IconCard
      highlight={true}
      onClick={() => { }}
      render={className => <div className={className}>Icon goes here</div>}
    />
  )
})
