import { ReactNode } from 'react';

import Image from 'next/image';
import Overlay from '@/features/Overlay';

interface ModalProps {
  children: ReactNode | ReactNode[];
  handleOnClick: () => void;
  className?: string;
}
const Modal = ({ children, handleOnClick, className = '' }: ModalProps) => {
  const closeOnClick = () => {
    console.log('close');
    //e.stopPropagation();
  };

  return (
    <>
      <Overlay handleOnClick={handleOnClick}>
        <div
          onClick={closeOnClick}
          className={`box-border z-[1003] rounded-[16px] mx-4 px-[16px] py-[24px] tablet:mx-[56px] max-h-[calc(100%-32px)] 
          desktop:p-[64px] mt-4 ${className} tablet:max-w-[80%] h-full flex flex-col justify-center desktop:mx-auto`}
        >
          <div className="">
            <Image
              onClick={handleOnClick}
              className="ml-auto py-4 desktop:py-[32px] cursor-pointer"
              src="/closeLight.svg"
              width={60}
              height={60}
              alt="close button"
            />
            {children}
          </div>
        </div>
      </Overlay>
    </>
  );
};

export default Modal;
