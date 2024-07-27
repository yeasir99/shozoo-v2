import Link from 'next/link';
import {
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';
import Image from 'next/image';
import BrandLogo from '@/data/images/brandLogo.png';

const Footer = () => {
  return (
    <div className="bg-sky-600 dark:bg-gray-800 px-2 pt-14 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center md:items-start gap-5 text-black dark:text-white">
          <Link href="/terms-and-policies">TERMS AND POLICIES</Link>
          <Link href="/about-us">ABOUT US</Link>
          <Link href="/viral-topic">VIRAL TOPIC</Link>
        </div>
        <div>
          <div className="flex justify-center">
            <div className="bg-black dark:bg-red-700 rounded-full p-2 mb-2">
              <Image
                src={BrandLogo}
                width={100}
                height={100}
                alt="brand logo"
              />
            </div>
          </div>
          <h3 className="text-black dark:text-white text-center uppercase">
            find us on your
          </h3>
          <div className="flex justify-center gap-5 pt-5">
            <a href="https://www.facebook.com/sozootoday" target="_blank">
              <FaFacebookF className="text-black dark:text-white text-3xl" />
            </a>
            <a href="https://www.instagram.com/sozoo.today" target="_blank">
              <FaInstagram className="text-black dark:text-white text-3xl" />
            </a>
            <a href="tiktok.com/@sozootoday" target="_blank">
              <FaTiktok className="text-black dark:text-white text-3xl" />
            </a>
            <a href="https://youtube.com/@sozootoday" target="_blank">
              <FaTwitter className="text-black dark:text-white text-3xl" />
            </a>
            <a href="https://youtube.com/@sozootoday" target="_blank">
              <FaYoutube className="text-black dark:text-white text-3xl" />
            </a>
            <a
              href="https://bd.linkedin.com/company/sozootoday"
              target="_blank"
            >
              <FaLinkedin className="text-black dark:text-white text-3xl" />
            </a>
          </div>
        </div>
        <div className="text-black dark:text-white">
          <p className="text-center">connect@sozootoday.com</p>
        </div>
      </div>
      <h3 className="text-center text-black dark:text-white mt-16 capitalize text-lg">
        Copyright &copy; 2024 sozoo today. all rights reserved.
      </h3>
    </div>
  );
};

export default Footer;
