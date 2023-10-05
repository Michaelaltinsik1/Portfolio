import Icon from '@/base/Icon';
import Carousel from '@/features/Carousel';
import icons from '@/utils/icons.json';

const IconsList = () => {
  return (
    <>
      <Carousel />
      <div className="hidden desktop:flex desktop:flex-wrap desktop:justify-center">
        {icons.map((icon) => (
          <Icon
            src={icon.src}
            alt={icon.alt}
            description={icon.description}
            key={icon.description}
          />
        ))}
      </div>
    </>
  );
};
export default IconsList;
