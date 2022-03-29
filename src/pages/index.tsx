import { NTInput } from '@/components/NTInput';
import Head from 'next/head';
import { ChangeEvent, FormEvent, useReducer } from 'react';

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

export default function Home() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleChange = (event: ChangeEvent) => {
    if (event.target instanceof HTMLInputElement) {
      setFormData({
        name: event.target.name,
        value: event.target.value,
      });
    }
  };

  const submitData = (event: FormEvent) => {
    event.preventDefault();
    const requestOptions = {
      method: `POST`,
      headers: { 'Content-Type': `application/json` },
      body: JSON.stringify(formData),
    };
    fetch(`https://624130af9b450ae2743c2ff5.mockapi.io/trucks`, requestOptions)
      .then((response) => response.json())
      .then(() =>
        setFormData({
          name: ``,
          phoneNumber: ``,
          company: ``,
          loadNumber: ``,
          customerName: ``,
          containerNumber: ``,
        }),
      );
  };

  return (
    <div>
      <div className="grid items-center min-h-screen">
        <Head>
          <title>NavTrac</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <form
          onSubmit={submitData}
          className="grid grid-cols-6 sm:grid-cols-12"
          data-testid="truck-form"
        >
          <NTInput
            label="Name"
            elname="name"
            formData={formData}
            handleChange={handleChange}
          />
          <NTInput
            label="Phone Number"
            elname="phoneNumber"
            formData={formData}
            handleChange={handleChange}
          />
          <NTInput
            label="Hauling Company"
            elname="company"
            formData={formData}
            handleChange={handleChange}
          />
          <NTInput
            label="Load/Booking Number"
            elname="loadNumber"
            formData={formData}
            handleChange={handleChange}
          />
          <NTInput
            label="Customer Name"
            elname="customerName"
            formData={formData}
            handleChange={handleChange}
          />
          <NTInput
            label="Container Number"
            elname="containerNumber"
            formData={formData}
            handleChange={handleChange}
          />
          <div className="col-start-2 col-end-6 md:col-start-5 md:col-end-9 mt-4">
            <button
              className="w-full	p-3 text-white rounded-md bg-red-500 hover:bg-red-700"
              type="submit"
              data-testid="submit-button"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
