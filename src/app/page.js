import CarouselContainer from '@/components/Carousel/CarouselContainer';
import Footer from '@/components/Footer';
import Nav from '@/components/nav/Nav';
import MarqueeContainer from '@/components/marquee/MarqueeContainer';
import CurrentDate from '@/components/CurrentDate';
import posts from '@/data/posts';
import Story from '@/components/Story';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="relative h-screen">
        <div className="absolute z-[1000] top-0 left-0 max-w-screen w-full bg-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            <Nav />
          </div>
        </div>
        <CarouselContainer />
        <MarqueeContainer />
      </div>
      <div className="bg-sky-50 dark:bg-black">
        <div className="relative">
          <CurrentDate />
        </div>
        <div className="max-w-[1300px] mx-auto py-10">
          <div className="pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map(item => (
              <Story key={item._id} item={item} />
            ))}
          </div>
          {posts && (
            <div className="flex justify-center pt-10">
              <Link href={'/posts'}>
                <button className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 text-xl rounded-md font-semibold">
                  View <span className="text-red-400">More</span>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
