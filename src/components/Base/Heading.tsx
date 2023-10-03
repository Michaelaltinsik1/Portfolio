import { ReactNode } from 'react';
const headingDefaults = 'font-normal text-primary-invert';

export const H1 = `text-H1Mobile leading-140 tracking-minus desktop:text-H1 desktop:leading-130 desktop:tracking-minus ${headingDefaults}`;
export const H2 = `text-H2Mobile leading-140 tracking-minus desktop:text-H2 desktop:leading-140 desktop:tracking-minus ${headingDefaults}`;
export const H3 = `text-H3Mobile leading-150 tracking-zero desktop:text-H3 desktop:leading-140 desktop:tracking-minus ${headingDefaults}`;

interface HeadingProps {
  type: 'H1' | 'H2' | 'H3';
  children: ReactNode;
  className?: string;
}

const Heading = ({ type, children, className = '' }: HeadingProps) => {
  const getheadingType = () => {
    switch (type) {
      case 'H1':
        return <h1 className={`${H1} ${className} `}>{children}</h1>;
      case 'H2':
        return <h2 className={`${H2}  ${className}`}>{children}</h2>;
      case 'H3':
        return <h3 className={`${H3}  ${className}`}>{children}</h3>;
    }
  };
  return getheadingType();
};
export default Heading;
