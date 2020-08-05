import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import ReactAnd from './index';

export default {
  title: 'ReactAnd',
  component: ReactAnd,
  decorators: [withKnobs],
};

export const TextAsChildren = (): JSX.Element => (
  <ReactAnd conjuction={text('Conjuction', 'and')} oxfordComma={boolean('Use Oxford comma?', true)}>
    {['apples', 'oranges', 'bananas']}
  </ReactAnd>
);

export const ComponentsAsChildren = (): JSX.Element => (
  <ReactAnd conjuction={text('Conjuction', 'and')} oxfordComma={boolean('Use Oxford comma?', true)}>
    <a href="#apples">apples</a>
    <a href="#oranges">oranges</a>
    <a href="#bananas">bananas</a>
  </ReactAnd>
);
