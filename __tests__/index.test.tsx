import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe(`Home`, () => {
  it(`renders a sign up button`, () => {
    render(<Home />);
    const signUpButton = screen.getByRole(`button`, {
      name: /Sign up/i,
    });
    expect(signUpButton).toBeInTheDocument();
  });
});
