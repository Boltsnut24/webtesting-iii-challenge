// Test away!import React from 'react';
import renderer from 'react-test-renderer';

import Controls from 'Controls.js';

describe('<Controls />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});