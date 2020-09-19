import React from 'react';
import { Input } from './Input';
import { render, screen } from '@testing-library/react';

describe('<Input />', () => {
  it('renders an input', () => {
    const { container } = render(<Input id={'test-input'} />);
    const input = container.querySelector('input');

    expect(input).toBeDefined();
  });

  it('displays a placeholder', () => {
    const placeholder = 'test-placeholder';
    const { getByPlaceholderText } = render(<Input id={'test-input'} placeholder={placeholder} />);

    expect(getByPlaceholderText(placeholder)).toBeDefined();
  });
});
