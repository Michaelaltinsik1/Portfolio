'use client';
import Image from 'next/image';
import { useState } from 'react';
import Nav from '@/components/Nav';
import Link from 'next/link';
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  return (
    <header className="z-[1000] flex justify-between bg-secondary p-4 h-[135px] sticky top-0 left-0">
      <Link className="desktop:ml-[32px] l" href="#top">
        <Image
          className="aspect-square w-[100px] h-[100px] "
          src="/logo.png"
          width={100}
          height={100}
          alt="logo"
        />
      </Link>
      <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      {!isNavOpen && (
        <Image
          className="ml-auto desktop:hidden"
          onClick={() => setIsNavOpen(true)}
          src="/menu.svg"
          width={80}
          height={80}
          alt="menu button"
        />
      )}
    </header>
  );
};
export default Header;
