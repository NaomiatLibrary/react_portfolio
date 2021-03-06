import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Naomi', () => {
  const { getByText } = render(<App/>);
  const linkElement = getByText(/Naomi/i);
  expect(linkElement).toBeInTheDocument();
});
