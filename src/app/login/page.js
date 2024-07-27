'use client';

import Nav from '@/components/nav/Nav';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Link from 'next/link';

const page = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = e => {
    e.preventDefault();
    console.log(credentials);
  };
  const handleChange = e => {
    console.log(e.target.value);
  };
  return (
    <div>
      <div className="bg-sky-100 dark:bg-black">
        <div className="max-w-[1400px] mx-auto">
          <Nav />
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-2 min-h-[80vh] flex justify-center items-center ">
        <div className="bg-sky-100 dark:bg-gray-600 mx-auto px-2 py-10 min-w-[500px] rounded-md">
          <h1 className="text-center text-black dark:text-white text-2xl font-bold py-3">
            Login Your Account
          </h1>
          <form className="w-full max-w-md m-auto" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-xl font-semibold capitalize mb-2 text-black dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full text-gray-700  rounded-lg  mb-3 leading-tight focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-xl font-semibold capitalize mb-2 text-black dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="block w-full text-gray-700  rounded-lg  mb-3 leading-tight focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="capitalize bg-green-500 px-4 py-2 rounded text-lg text-white font-semibold tracking-wide mt-1 hover:bg-green-600 hover:text-gray-100 transition duration-300 focus:outline-none"
              >
                login
              </button>
            </div>
            <div className="pt-4">
              <p className="font-bold text-lg">
                Don't have account?{' '}
                <Link href="/sign-up" className="text-blue-800">
                  Sign up
                </Link>{' '}
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
