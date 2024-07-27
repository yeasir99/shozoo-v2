'use client';
import Image from 'next/image';
const DisplayPostDesc = ({ news }) => {
  return (
    <div className="max-w-[1400px] mx-auto px-2">
      <div className="bg-sky-50 dark:bg-gray-600 rounded-md py-10">
        <div className="flex justify-center mb-10">
          <Image
            src={news.image.imageurl}
            alt="main photo"
            width={600}
            height={600}
          />
        </div>
        <div className="px-10 text-black">
          <h1 className="text-2xl font-bold mb-5 text-black dark:text-white">
            {news.title}
          </h1>
          <p className="text-lg text-black dark:text-sky-100">
            {news.description}
          </p>
        </div>
        {/* 👿👿👿👿👿come back and fix it😈😈😈😈 */}
        {/* user interact like or dislike goes here */}
        <div>{/* comment goes here */}</div>
      </div>
    </div>
  );
};

export default DisplayPostDesc;
