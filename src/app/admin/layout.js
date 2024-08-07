import Nav from '@/components/nav/Nav';
import Footer from '@/components/Footer';
import AdminNav from '@/components/nav/AdminNav';

const layout = ({ children }) => {
  return (
    <>
      <div className="bg-blue-600 dark:bg-black">
        <div className="max-w-[1400px] mx-auto">
          <Nav />
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-2 min-h-[80vh] grid grid-cols-4 gap-4">
        <div className="h-full bg-gray-500">
          <AdminNav />
        </div>
        <div className="col-span-3 bg-gray-400 p-2">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default layout;
