import Link from 'next/link';
import Image from 'next/image';
import React, { SetStateAction, Dispatch } from 'react';
interface NavProps {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}
const Nav = ({ isNavOpen, setIsNavOpen }: NavProps) => {
  return (
    <nav
      className={`left-0 top-0 absolute min-h-screen w-full bg-secondary p-4 desktop:static desktop:min-h-0 desktop:w-fit ${
        isNavOpen ? '' : 'hidden desktop:flex'
      }`}
    >
      {isNavOpen && (
        <Image
          onClick={() => setIsNavOpen(false)}
          className="ml-auto desktop:hidden py-4"
          src="/close.svg"
          width={80}
          height={80}
          alt="close button"
        />
      )}
      <ul className="flex flex-col mt-[32px] desktop:flex-row desktop:mt-0 ">
        <li>
          <Link
            onClick={() => setIsNavOpen(false)}
            className="text-primary-invert text-navItemMobile desktop:text-navItem px-4 py-[20px] desktop:px-[32px] flex hover:underline underline-offset-[6px] decoration-primary-invert"
            href="/#about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsNavOpen(false)}
            className="text-primary-invert text-navItemMobile desktop:text-navItem px-4 py-[20px] desktop:px-[32px] flex hover:underline underline-offset-[6px] decoration-primary-invert"
            href="/#projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsNavOpen(false)}
            className="text-primary-invert text-navItemMobile desktop:text-navItem px-4 py-[20px] desktop:px-[32px] flex hover:underline underline-offset-[6px] decoration-primary-invert"
            href="/#contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
