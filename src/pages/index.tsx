import { NTInput } from '@/components/NTInput';
import Head from 'next/head';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitData = async (event: FormEvent) => {
    event.preventDefault();
    const requestOptions = {
      method: `POST`,
      headers: { 'Content-Type': `application/json` },
      body: JSON.stringify(formData),
    };
    await fetch(
      `https://624130af9b450ae2743c2ff5.mockapi.io/trucks`,
      requestOptions,
    );
    setFormData({
      name: ``,
      phoneNumber: ``,
      company: ``,
      loadNumber: ``,
      customerName: ``,
      containerNumber: ``,
    });
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
            elName="name"
            formData={formData}
            handleChange={handleChange}
          />
          <NTInput
            label="Phone Number"
            elName="phoneNumber"
            formData={formData}
            handleChange={handleChange}
          />
          <NTInput
            label="Hauling Company"
            elName="company"
            formData={formData}
            handleChange={handleChange}
          />
          <NTInput
            label="Load/Booking Number"
            elName="loadNumber"
            formData={formData}
            handleChange={handleChange}
          />
          <NTInput
            label="Customer Name"
            elName="customerName"
            formData={formData}
            handleChange={handleChange}
          />
          <NTInput
            label="Container Number"
            elName="containerNumber"
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
