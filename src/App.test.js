// App.test.js

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main heading with Little Lemon', () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: /Little Lemon/i, level: 1 });
  expect(heading).toBeInTheDocument();
});
