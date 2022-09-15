import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button renders children', () => {
  render(<Button children="Hello" />)

  const button = screen.getByText("Hello");

  expect(button).toBeInTheDocument();
});

test('Button renders color prop as background color', () => {
  render(<Button children="Hello" color="red" />)

  const button = screen.getByRole("button");

  expect(button).toHaveAttribute("style", expect.stringContaining("background-color: red;"))
});
