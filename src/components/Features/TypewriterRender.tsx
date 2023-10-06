'use client';
import { useTypewriter } from '@/features/useTypewriter';
import Heading from '@/base/Heading';
const TypeWriterRender = () => {
  const texts = ['Fullstack developer.'];
  const currentText = useTypewriter(texts);
  return (
    <Heading
      type="H1"
      className="desktop:row-start-1 desktop:row-end-2 desktop:mt-auto"
    >
      Hi, I am
      <span className=" flex break-words">Michael Altinisik!</span>
      <span className="text-secondary-invert flex break-words min-h-[45px] desktop:min-h-[52px]">
        {currentText}
      </span>
    </Heading>
  );
};
export default TypeWriterRender;
