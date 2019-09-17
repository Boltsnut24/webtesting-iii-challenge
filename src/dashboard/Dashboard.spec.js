// Test away
import React from 'react';
import Dashboard from './Dashboard';
import { render, fireEvent, cleanup } from 'react-testing-library';

describe('<Dashboard />', () => {
  beforeEach(cleanup);
  it('renders without crashing', () => {
    render(<Dashboard />);
  });
  it('should match snapshot', () => {
    const dashboard = render(<Dashboard />);
    expect(dashboard).toMatchSnapshot();
  });
});