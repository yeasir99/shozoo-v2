'use client';
import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();
  const handleSubmit = async e => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) return;
    try {
      const res = await signIn('credentials', {
        ...credentials,
        redirect: false,
      });
      if (res.ok) {
        router.replace('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = e => {
    setCredentials(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
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
          name="email"
          className="block w-full text-gray-700  rounded-lg  mb-3 leading-tight focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-green-500"
          onChange={handleChange}
          placeholder="Email"
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
          required
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
          <Link
            href="/sign-up"
            className="text-blue-800 dark:text-blue-400 underline"
          >
            Sign up
          </Link>{' '}
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
