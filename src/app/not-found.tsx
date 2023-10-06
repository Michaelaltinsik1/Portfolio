import Link from 'next/link';
import Header from '@/components/Header';
import Heading from '@/components/Base/Heading';
import Paragraph from '@/components/Base/Paragraph';
import Button from '@/components/Base/Button';
export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="px-4 py-[24px] tablet:p-[40px] tablet:max-w-[1000px] desktop:max-w-fit mx-auto desktop:mt-[80px]">
        <Heading type="H1" className="mb-[20px] desktop:mb-[24px]">
          Page not found
        </Heading>
        <Paragraph type="Body" className="mb-[32px] desktop:mb-[40px]">
          The page you are looking for does not exist or has been moved.
        </Paragraph>
        <Link href="/">
          <Button type="button" variant="primary">
            To the homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}
