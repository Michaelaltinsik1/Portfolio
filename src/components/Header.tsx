'use client';
import Image from 'next/image';
import { useState } from 'react';
import Nav from './Nav';
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  return (
    <header className="flex justify-between bg-secondary p-4">
      <Image
        className="desktop:ml-[32px]"
        src="/logo.png"
        width={100}
        height={100}
        alt="logo"
      />
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
