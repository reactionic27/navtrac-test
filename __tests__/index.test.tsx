import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Home from '@/pages/index';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        createdAt: 17,
        name: `123`,
        phoneNumber: `234`,
        company: `234`,
        loadNumber: `345`,
        customerName: `456`,
        containerNumber: `567`,
        id: `14`,
      }),
  }),
);

describe(`Home`, () => {
  afterEach(cleanup);

  it(`renders a sign up button`, () => {
    render(<Home />);
    const signUpButton = screen.getByRole(`button`, {
      name: /Sign up/i,
    });
    expect(signUpButton).toBeInTheDocument();
  });

  it(`when click submit button, submit values if all inputs are correct`, () => {
    const { getByTestId } = render(<Home />);
    const mainForm = getByTestId(`truck-form`);
    expect(mainForm).toBeInTheDocument();

    const nameInput = getByTestId(`name`);
    expect(mainForm).toBeInTheDocument();
    fireEvent.change(nameInput, { target: { value: `Test Name` } });

    const phoneNumberInput = getByTestId(`phoneNumber`);
    expect(mainForm).toBeInTheDocument();
    fireEvent.change(phoneNumberInput, {
      target: { value: `Test phoneNumberInput` },
    });

    const companyInput = getByTestId(`company`);
    expect(mainForm).toBeInTheDocument();
    fireEvent.change(companyInput, { target: { value: `Test company` } });

    const loadNumberInput = getByTestId(`loadNumber`);
    expect(mainForm).toBeInTheDocument();
    fireEvent.change(loadNumberInput, { target: { value: `Test loadNumber` } });

    const customerNameInput = getByTestId(`customerName`);
    expect(mainForm).toBeInTheDocument();
    fireEvent.change(customerNameInput, {
      target: { value: `Test customerName` },
    });

    const containerNumberInput = getByTestId(`containerNumber`);
    expect(mainForm).toBeInTheDocument();
    fireEvent.change(containerNumberInput, {
      target: { value: `Test containerNumber` },
    });

    const submitBtn = getByTestId(`submit-button`);
    expect(submitBtn).toBeInTheDocument();

    fireEvent.click(submitBtn);

    expect(global.fetch).toHaveBeenCalledWith(
      `https://624130af9b450ae2743c2ff5.mockapi.io/trucks`,
      {
        body: `{"name":"Test Name","phoneNumber":"Test phoneNumberInput","company":"Test company","loadNumber":"Test loadNumber","customerName":"Test customerName","containerNumber":"Test containerNumber"}`,
        headers: { 'Content-Type': `application/json` },
        method: `POST`,
      },
    );
  });
});
