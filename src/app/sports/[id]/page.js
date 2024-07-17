import Nav from '@/components/nav/Nav';
import Footer from '@/components/Footer';
import posts from '@/data/posts';
import DisplayPostDesc from '@/components/posts/DisplayPostDesc ';

const page = () => {
  const news = posts[0];
  return (
    <div>
      <div className="bg-sky-100 dark:bg-black">
        <div className="max-w-[1400px] mx-auto">
          <Nav />
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-2 py-6">
        <DisplayPostDesc news={news} />
      </div>
      <Footer />
    </div>
  );
};

export default page;
