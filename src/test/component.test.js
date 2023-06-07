import React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/button';
import Calculator from '../components/calculator';
import Quote from '../components/quote';

describe('test components renders correctly', () => {
  test('test 1', () => {
    const { container } = render(<Button value="+" className="column" handleClick={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test('test 1', () => {
    const { container } = render(<Calculator />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test('test 1', () => {
    const { container } = render(<Quote />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
