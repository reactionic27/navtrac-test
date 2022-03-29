import { NTInput } from '@/components/NTInput';
import Head from 'next/head';
import { FormEvent, useReducer } from 'react';

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

export default function Home() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleChange = (event: KeyboardEvent) => {
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

  console.log(`formData.phoneNumber`, formData);
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
        >
          <NTInput
            label="Name"
            name="name"
            formData={formData}
            handleChange={handleChange}
          />
          <NTInput
            label="Phone Number"
            name="phoneNumber"
            formData={formData}
            handleChange={handleChange}
          />
          <NTInput
            label="Hauling Company"
            name="company"
            formData={formData}
            handleChange={handleChange}
          />
          <NTInput
            label="Load/Booking Number"
            name="loadNumber"
            formData={formData}
            handleChange={handleChange}
          />
          <NTInput
            label="Customer Name"
            name="customerName"
            formData={formData}
            handleChange={handleChange}
          />
          <NTInput
            label="Container Number"
            name="containerNumber"
            formData={formData}
            handleChange={handleChange}
          />
          <div className="col-start-2 col-end-6 md:col-start-5 md:col-end-9 mt-4">
            <button
              className="w-full	p-3 text-white rounded-md bg-red-500 hover:bg-red-700"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
