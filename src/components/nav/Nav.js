'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md';
import ThemeSwitch from './ThemeSwitch';
import BrandLogo from '@/data/images/brandLogo.png';
import Image from 'next/image';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const clasess =
    'flex flex-row items-center justify-center py-1 capitalize font-semibold hover:font-bold';
  const router = useRouter();

  const handleMenu = () => {
    setMenuOpen(state => !state);
  };

  return (
    <div className="flex justify-between  lg:gap-8 py-2 px-2 items-center relative">
      <Link href="/">
        <Image src={BrandLogo} width={50} height={50} alt="logo" />
      </Link>
      <div className="flex items-center justify-between gap-4 ">
        <input
          type="text"
          placeholder="SEARCH"
          className="px-3 lg:px-5 py-2 rounded-full max-w-2xl outline-black dark:outline-white border-gray-600 border-2"
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              const queriesData = e.target.value;
              if (queriesData) {
                localStorage.setItem('queriesData', queriesData);
                router.push('/search-news');
              }
            }
          }}
        />

        <ThemeSwitch />
        {menuOpen ? (
          <MdOutlineClose
            className="text-2xl text-black dark:text-white cursor-pointer"
            onClick={handleMenu}
          />
        ) : (
          <MdOutlineMenu
            className="text-2xl text-black dark:text-white cursor-pointer"
            onClick={handleMenu}
          />
        )}
      </div>

      <div
        className={`${
          menuOpen ? '' : 'hidden'
        } absolute right-0 top-14 bg-sky-600 dark:bg-gray-700 w-52 py-5 rounded-md z-50`}
      >
        <Link href="/business" className={clasess}>
          business
        </Link>
        <Link href="/politics" className={clasess}>
          politics
        </Link>
        <Link href="/sports" className={clasess}>
          sports
        </Link>
        <Link href="/pop-culture" className={clasess}>
          pop culture
        </Link>
        <Link href="/education" className={clasess}>
          education
        </Link>
        <Link href="/opinion" className={clasess}>
          opinion
        </Link>
        <Link href="/login" className={clasess}>
          Login
        </Link>
        <Link href="/sign-up" className={clasess}>
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Nav;
