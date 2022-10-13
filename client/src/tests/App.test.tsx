import { render, screen } from '@testing-library/react';
import App from '../Components/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
