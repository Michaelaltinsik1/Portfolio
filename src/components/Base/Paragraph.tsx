import { ReactNode } from 'react';

const bodyDefaults = 'leading-150 tracking-zero text-primary-invert';

export const body = `font-normal text-body ${bodyDefaults}`;
export const body2 = `font-bold text-bodySmall ${bodyDefaults}`;
interface ParagraphProps {
  type: 'Body' | 'BodySmall';
  children: ReactNode;
  className?: string;
}

const Paragraph = ({ type, children, className = '' }: ParagraphProps) => {
  const getParagraphType = () => {
    switch (type) {
      case 'Body':
        return <p className={`${body} ${className} `}>{children}</p>;
      case 'BodySmall':
        return <p className={`${body2} ${className}`}>{children}</p>;
      default:
        return <></>;
    }
  };
  return getParagraphType();
};
export default Paragraph;
