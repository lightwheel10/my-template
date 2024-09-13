import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button component', () => {
  it('renders a button with text', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });
});