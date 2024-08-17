'use client';
import InfoWrapper from '@/components/posts/InfoWrapper';
import DisplayPostInfo from '@/components/posts/DisplayPostInfo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getCategoryPosts } from '@/utils/utils';

const page = () => {
  const pathName = usePathname().split('/')[1];
  const [posts, setPosts] = useState({
    data: [],
    status: 'loading',
  });

  useEffect(() => {
    getCategoryPosts(pathName, setPosts);
  }, []);

  return (
    <InfoWrapper>
      <div className="min-h-[80vh]">
        {posts.status === 'loading' ? (
          <div className="min-h-[80vh] flex justify-center items-center">
            <p className="text-2Xl font-semibold ">Loading...</p>
          </div>
        ) : posts.data.length === 0 ? (
          <div className="min-h-[80vh] flex justify-center items-center">
            <p className="text-2Xl font-semibold ">No Post To Display</p>
          </div>
        ) : (
          posts.data.map(item => (
            <Link href={`sports/${item._id}`} key={item._id}>
              <DisplayPostInfo news={item} />
            </Link>
          ))
        )}
      </div>
    </InfoWrapper>
  );
};

export default page;
