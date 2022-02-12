import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Welcome to the Animal Farm by Abriel/i);
  expect(headerElement).toBeInTheDocument();
});
