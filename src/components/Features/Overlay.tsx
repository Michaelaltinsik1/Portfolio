import { ReactNode, useContext } from 'react';

interface OverlayProps {
  handleOnClick: () => void;
  children: ReactNode;
}
const Overlay = ({ handleOnClick, children }: OverlayProps) => {
  const clickHandler = (e: any) => {
    e.stopPropagation();
    handleOnClick();
  };
  return (
    <div
      onClick={(e) => clickHandler(e)}
      className={`box-border z-[1001] fixed w-full h-full bg-opacity-80 top-0 left-0 bg-[#212121]`}
    >
      {children}
    </div>
  );
};
export default Overlay;
