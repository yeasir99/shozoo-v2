'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getPost } from '@/utils/utils';
import { useParams } from 'next/navigation';
import { FaHeart, FaMessage } from 'react-icons/fa6';
import CommentForm from './CommentForm';

const DisplayPostDesc = () => {
  const params = useParams();
  const [news, setNews] = useState({
    data: [],
    status: 'loading',
  });
  const [messageForm, setMessageForm] = useState(false);

  useEffect(() => {
    getPost(setNews, params.id);
  }, []);

  if (news.status === 'loading') {
    return (
      <div className="text-xl font-semibold text-center py-10 min-h-[80vh]">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-2">
      <div className="bg-sky-50 dark:bg-gray-600 rounded-md py-10">
        <div className="flex justify-center mb-10">
          <Image
            src={news.data.image.imageurl}
            alt="main photo"
            width={600}
            height={600}
          />
        </div>
        <div className="px-10 text-black">
          <h1 className="text-2xl font-bold mb-5 text-black dark:text-white">
            {news.data.title}
          </h1>
          <div
            className="text-lg text-black dark:text-sky-100"
            dangerouslySetInnerHTML={{
              __html: news.data.description.replace(/ style="[^"]*"/g, ''),
            }}
          />
        </div>
        <div className="px-10 py-5 flex gap-5">
          <FaHeart className="text-2xl cursor-pointer" onClick={() => {}} />
          <FaMessage
            className="text-2xl cursor-pointer"
            onClick={() => setMessageForm(!messageForm)}
          />
        </div>
        <div>
          <CommentForm
            news={news.data}
            setPost={setNews}
            messageForm={messageForm}
            setMessageForm={setMessageForm}
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayPostDesc;
