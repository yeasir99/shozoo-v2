'use client';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/Footer';
import posts from '@/data/posts';
import DisplayPostInfo from '@/components/posts/DisplayPostInfo';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <div className="bg-sky-100 dark:bg-black">
        <div className="max-w-[1400px] mx-auto">
          <Nav />
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-2 py-6">
        {/* posts goes here */}
        {posts &&
          posts.map(item => (
            <Link href={`sports/${item._id}`} key={item._id}>
              <DisplayPostInfo news={item} />
            </Link>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default page;
