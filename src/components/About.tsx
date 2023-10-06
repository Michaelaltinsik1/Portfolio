import Heading from '@/base/Heading';

import Image from 'next/image';
import Michael from '../../public/michael.png';
import Paragraph from '@/base/Paragraph';
import Button from '@/base/Button';
import IconsList from '@/features/IconsList';
import TypeWriterRender from '@/features/TypewriterRender';

import Link from 'next/link';
const About = () => {
  return (
    <div
      id="about"
      className="bg-secondary rounded-lg px-4 py-6 desktop:max-w-[1400px] desktop:mx-auto desktop:p-[80px] desktop:my-[80px] scroll-m-[250px] mx-4 my-[24px]"
    >
      <div className="grid desktop:grid-cols-cols-2 desktop:grid-rows-rows-3">
        {<TypeWriterRender />}
        <div className="bg-tertiary w-full max-w-[350px] justify-self-center rounded-xl border border-solid border-primary-invert mt-[24px] desktop:col-start-2 desktop:col-end-2 desktop:row-start-1 desktop:row-end-4 desktop:justify-self-end desktop:mt-0">
          <Image
            className="h-fit w-full rounded-xl max-w-[450px] mt-auto"
            src={Michael}
            alt="Picture of me"
            priority
          />
        </div>

        <Paragraph type="Body" className="mt-[24px] row-start-2 row-end-2">
          I&apos;m on a mission to create digital experiences that leave users
          delighted and satisfied. My passion lies in crafting responsive and
          user-friendly websites that not only meet but exceed customer
          expectations.
        </Paragraph>
        <div className="mt-[32px] desktop:mt-[40px]">
          <Link href="#contact">
            <Button
              type="button"
              variant="primary"
              className="mb-[20px] desktop:mr-[32px] desktop:mb-0"
            >
              Contact me
            </Button>
          </Link>
          <Link href="#projects">
            <Button type="button" variant="secondary">
              Check out my projects
            </Button>
          </Link>
        </div>
      </div>
      <Heading className="mt-[32px] mb-[16px] desktop:mb-[24px]" type="H2">
        Skills
      </Heading>
      {<IconsList />}
    </div>
  );
};
export default About;
