'use client';
import Button from '@/base/Button';
import Heading from '@/base/Heading';
import Image from 'next/image';
import Paragraph from '../Base/Paragraph';
import { StaticImageData } from 'next/image';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const YoutubeVideo = dynamic(() => import('./YoutubeVideo'));
const Modal = dynamic(() => import('./Modal'));
interface CardType {
  videoId: string;
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
  videoId,
  imgSrc,
  alt,
  isLiveSite,
  sourceCodeUrl,
  sitePreview,
  languages,
  heading,
  description,
}: CardType) => {
  const [isVideoVisibile, setIsVideoVisible] = useState<boolean>(false);
  const closeVideo = () => {
    setIsVideoVisible(false);
  };
  const showVideo = () => {
    setIsVideoVisible(true);
  };
  return (
    <div className="mx-auto rounded-lg mb-4 bg-primary shadow-shadowCustom desktop:mb-[64px] last-of-type:mb-0">
      <Image src={imgSrc} alt={alt} className="rounded-t-[8px]" />
      <div className="p-4 desktop:px-[40px] desktop:py-[32px]">
        <Heading className="pb-[20px] desktop:pb-[24px]" type="H3">
          {heading}
        </Heading>
        <Paragraph className="mb-[20px] desktop:mb-[32px]" type="Body">
          {description}
        </Paragraph>
        <div className="desktop:flex desktop:justify-between] desktop:mt-[32px] mb-[20px] desktop:mb-[32px] ">
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
              variant="secondary"
              isButton={false}
              href={sitePreview}
            >
              Check out live site
            </Button>
          ) : (
            <Button
              onClick={showVideo}
              className="desktop:flex-1 desktop:ml-[20px]"
              type="button"
              variant="secondary"
              href=""
              isButton={true}
            >
              Check out video
            </Button>
          )}
        </div>
        <Paragraph className="text-center font-light italic" type="Body">
          {languages}
        </Paragraph>
      </div>
      {isVideoVisibile && videoId && (
        <Modal handleOnClick={closeVideo}>
          {isVideoVisibile && <YoutubeVideo videoId={videoId} />}
        </Modal>
      )}
    </div>
  );
};
export default Card;
