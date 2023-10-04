import Card from '@/features/Card';
import projects from '@/utils/projects.json';
import crew from '../../../public/space-crew.jpg';
const CardList = () => {
  return (
    <div className="mt-[24px] desktop:mt-[40px]">
      {projects.map((project) => (
        <Card
          key={project.imgSrc}
          imgSrc={crew}
          isLiveSite={project.isLiveSite}
          alt={project.alt}
          description={project.description}
          sitePreview={project.sitePreview}
          sourceCodeUrl={project.sourceCodeUrl}
          heading={project.heading}
          languages={project.langugaes}
        />
      ))}
    </div>
  );
};

export default CardList;
