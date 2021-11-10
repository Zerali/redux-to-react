import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const reduxHeadline = screen.getByText(/Redux/i);
  expect(reduxHeadline).toBeInTheDocument();
  
  const reactHooksHeadline = screen.getByText(/React Hooks/i);
  expect(reactHooksHeadline).toBeInTheDocument();
});
