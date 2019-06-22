import { withA11y } from '@storybook/addon-a11y';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('../src/components', true, /\.story\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withA11y);
addDecorator(withKnobs);

configure(loadStories, module);
