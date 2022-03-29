import { render, screen } from '@testing-library/react';
import App from '@/pages/index';

describe(`App`, () => {
  it(`renders a heading`, () => {
    render(<App />);

    const heading = screen.getByRole(`heading`, {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
