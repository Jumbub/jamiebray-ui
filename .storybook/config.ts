import { withA11y } from '@storybook/addon-a11y';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/theming'

addParameters({
  options: {
    theme: themes.dark
  }
})

const req = require.context('../src/components', true, /\.story\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withA11y);
addDecorator(withKnobs);

configure(loadStories, module);
