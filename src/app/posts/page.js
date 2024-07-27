'use client';
import InfoWrapper from '@/components/posts/InfoWrapper';
import posts from '@/data/posts';
import DisplayPostInfo from '@/components/posts/DisplayPostInfo';
import Link from 'next/link';

const page = () => {
  return (
    <InfoWrapper>
      {posts &&
        posts.map(item => (
          <Link href={`pop-culture/${item._id}`} key={item._id}>
            <DisplayPostInfo news={item} />
          </Link>
        ))}
    </InfoWrapper>
  );
};

export default page;
