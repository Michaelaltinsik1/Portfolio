import Image from 'next/image';
import Paragraph from '@/base/Paragraph';
interface IconProps {
  src: string;
  alt: string;
  description: string;
}

const Icon = ({ src, alt, description }: IconProps) => {
  return (
    <div className="flex py-4 px-[20px] desktop:max-w-[120px] flex-col w-1/3 flex-shrink-0 tablet:w-1/6 items-center">
      <Image src={src} alt={alt} width={80} height={80} />
      <Paragraph className="text-center mt-1" type="Body">
        {description}
      </Paragraph>
    </div>
  );
};
export default Icon;
