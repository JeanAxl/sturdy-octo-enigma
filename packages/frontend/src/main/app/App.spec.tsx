import React from 'react';
import { render } from '@testing-library/react';
import { App } from '$src/main/app/App';

describe('App', () => {
  it('should render', () => {
    const { container } = render(<App />);
    const div = container.querySelector('div');

    expect(div).toBeDefined();
  });
});
