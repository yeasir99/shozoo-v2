import Nav from '@/components/nav/Nav';
import Footer from '@/components/Footer';
import LoginForm from '@/components/auth/LoginForm';

const page = () => {
  return (
    <div>
      <div className="bg-blue-600 dark:bg-black">
        <div className="max-w-[1400px] mx-auto">
          <Nav />
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-2 min-h-[80vh] flex justify-center items-center ">
        <div className="bg-sky-100 dark:bg-gray-600 mx-auto px-2 py-10 min-w-[500px] rounded-md">
          <h1 className="text-center text-black dark:text-white text-2xl font-bold py-3">
            Login Your Account
          </h1>
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
