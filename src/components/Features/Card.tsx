import Button from '@/base/Button';
import Heading from '@/base/Heading';
import Image from 'next/image';
import Paragraph from '../Base/Paragraph';
import { StaticImageData } from 'next/image';

interface CardType {
  imgSrc: StaticImageData;
  alt: string;
  isLiveSite?: boolean;
  sourceCodeUrl: string;
  sitePreview: string;
  languages: string;
  heading: string;
  description: string;
}

const Card = ({
  imgSrc,
  alt,
  isLiveSite,
  sourceCodeUrl,
  sitePreview,
  languages,
  heading,
  description,
}: CardType) => {
  return (
    <div className="mx-auto rounded-lg mb-4 bg-primary shadow-shadowCustom desktop:mb-[64px] last-of-type:mb-0">
      <Image src={imgSrc} alt={alt} className="rounded-t-[8px]" />
      <div className="p-4 desktop:px-[40px] desktop:py-[32px]">
        <Heading className="pb-[20px] desktop:pb-[24px]" type="H3">
          {heading}
        </Heading>
        <Paragraph
          className="mb-[20px] desktop:mb-[32px] line-clamp-3"
          type="Body"
        >
          {description}
        </Paragraph>
        <div className="desktop:flex desktop:justify-between] ">
          {sourceCodeUrl && (
            <Button
              className="mb-4 desktop:flex-1 desktop:mr-[20px] desktop:mb-0"
              type="button"
              variant="primary"
              isButton={false}
              href={sourceCodeUrl}
            >
              Check out source code
            </Button>
          )}
          {isLiveSite ? (
            <Button
              className={`desktop:flex-1 ${
                sourceCodeUrl && 'desktop:ml-[20px]'
              }`}
              type="button"
              variant="primary"
              isButton={false}
              href={sitePreview}
            >
              Check out live site
            </Button>
          ) : (
            <Button
              className="desktop:flex-1 desktop:ml-[20px]"
              type="button"
              variant="primary"
              href=""
              isButton={true}
            >
              Check out video
            </Button>
          )}
        </div>
        <Button
          className="my-4 desktop:min-w-full desktop:mt-[32px] mb-[20px]"
          type="button"
          variant="secondary"
        >
          Read more
        </Button>
        <Paragraph className="text-center font-light italic" type="Body">
          {languages}
        </Paragraph>
      </div>
    </div>
  );
};
export default Card;
