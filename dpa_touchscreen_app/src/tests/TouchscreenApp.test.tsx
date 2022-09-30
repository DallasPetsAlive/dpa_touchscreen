import { render, screen } from '@testing-library/react';
import { TouchscreenApp } from '../pages/TouchscreenApp';

test('renders learn react link', () => {
  render(<TouchscreenApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
