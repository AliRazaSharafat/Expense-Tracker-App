import React from 'react';
import { render } from '@testing-library/react';
import Expense from './Expense';

test('renders learn react link', () => {
  const { getByText } = render(<Expense />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
