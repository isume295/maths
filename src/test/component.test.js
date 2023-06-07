import React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/button';

describe('test components renders correctly', () => {
  test('test 1', () => {
    const { container } = render(<Button value="+" className="column" handleClick={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
