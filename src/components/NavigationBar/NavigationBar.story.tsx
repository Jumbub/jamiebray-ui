import React from 'react'
import { storiesOf } from '@storybook/react'
import NavigationBar from './NavigationBar'
import { BrowserRouter } from 'react-router-dom'
import { text, array } from '@storybook/addon-knobs'

storiesOf('Components', module)
  .add('Navigation Bar', () => (
    <BrowserRouter>
      <NavigationBar
        title={text('title', 'Example Title')}
        links={array('links', ['These', 'Are', 'Navigation', 'Links']).map(
          item => ({ label: item, href: '/' + item })
        )}
      />
    </BrowserRouter>
  ))
