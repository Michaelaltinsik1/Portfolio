'use client';
import { useTypewriter } from '@/features/useTypewriter';
import Heading from '@/base/Heading';
const TypeWriterRender = () => {
  const texts = ['Frontend developer.', 'Fullstack developer.'];
  const currentText = useTypewriter(texts);
  return (
    <Heading
      type="H1"
      className="desktop:row-start-1 desktop:row-end-2 desktop:mt-auto"
    >
      Hi, I am
      <span className=" flex break-words">Michael Altinisik!</span>
      <span className="text-secondary-invert flex break-words">
        {currentText} &nbsp;
      </span>
    </Heading>
  );
};
export default TypeWriterRender;
