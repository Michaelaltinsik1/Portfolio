import Card from '@/features/Card';
import projects from '@/utils/projects.json';
import space from '../../../public/space-tourism.jpg';
import ems from '../../../public/ems.jpg';
import gardening from '../../../public/puutarhuri.jpg';
import acupuncture from '../../../public/akupunktur.jpg';
const CardList = () => {
  const images = [ems, gardening, space, acupuncture];
  return (
    <div className="mt-[24px] desktop:mt-[40px]">
      {projects.map((project, index) => (
        <Card
          key={project.imgSrc}
          imgSrc={images[index]}
          isLiveSite={project.isLiveSite}
          alt={project.alt}
          description={project.description}
          sitePreview={project.sitePreview}
          sourceCodeUrl={project.sourceCodeUrl}
          heading={project.heading}
          languages={project.langugaes}
          videoId={project.videoId}
        />
      ))}
    </div>
  );
};

export default CardList;
