import Heading from '@/base/Heading';
import Paragraph from '@/base/Paragraph';
import CardList from './Features/CardList';
const Projects = () => {
  return (
    <div className="py-[24px] px-4 bg-secondary mt-[24px] flex justify-center desktop:py-[80px]">
      <div className="max-w-[820px] scroll-m-[135px]" id="projects">
        <Heading type="H2">My recent work</Heading>
        <Paragraph className="mt-[20px] desktop:mt-[24px]" type="Body">
          Here you can find an overview of some of my past projects.
        </Paragraph>
        <CardList />
      </div>
    </div>
  );
};
export default Projects;
