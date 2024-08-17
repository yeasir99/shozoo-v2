'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios';

const page = () => {
  const [state, setState] = useState({
    isVerified: false,
    status: 'Loading',
  });
  const pathName = usePathname().split('/')[2];

  const verifyUser = async () => {
    const res = axios.get('http://localhost:3000/api/sign-up', {
      headers: {
        Id: pathName,
      },
    });

    if (res.status === 200) {
      setState({ ...state, isVerified: true, status: 'idle' });
    } else {
      setState({ ...state, status: 'idle' });
    }
  };

  return <div>page</div>;
};

export default page;
