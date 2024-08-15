'use client';
import { useState, useEffect } from 'react';
import { getCarouselData } from '@/utils/utils';

const ShowData = () => {
  const [state, setState] = useState({
    data: [],
    status: 'loading',
  });

  useEffect(() => {
    getCarouselData(setState);
  }, []);

  if (state.status === 'loading') {
    return <div>Loading...</div>;
  }

  return state.data.length ? (
    <div>show data</div>
  ) : (
    <div className="text-center text-gray-200 font-semibold py-10 text-2xl">
      No Data To Display
    </div>
  );
};

export default ShowData;
