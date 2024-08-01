'use client';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/Footer';
import { useState } from 'react';

const page = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    setCredentials(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <div className="bg-blue-600 dark:bg-black">
        <div className="max-w-[1400px] mx-auto">
          <Nav />
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-2 min-h-[80vh] flex justify-center items-center ">
        <div className="bg-sky-100 dark:bg-gray-600 mx-auto px-2 py-10 min-w-[500px] rounded-md">
          <h1 className="text-center text-black dark:text-white text-2xl font-bold py-3">
            Sign Up For Account
          </h1>
          <form
            className="w-full max-w-md m-auto"
            action="/api/sign-up"
            method="post"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xl font-semibold capitalize mb-2 text-black dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full text-gray-700  rounded-lg  mb-3 leading-tight focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
                placeholder="Name"
                value={credentials.name}
                required
              />
            </div>
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
                name="email"
                className="block w-full text-gray-700  rounded-lg  mb-3 leading-tight focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
                placeholder="Email"
                value={credentials.email}
                required
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
                name="password"
                className="block w-full text-gray-700  rounded-lg  mb-3 leading-tight focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                onChange={handleChange}
                placeholder="Password"
                value={credentials.password}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="capitalize bg-green-500 px-4 py-2 rounded text-lg text-white font-semibold tracking-wide mt-1 hover:bg-green-600 hover:text-gray-100 transition duration-300 focus:outline-none"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
