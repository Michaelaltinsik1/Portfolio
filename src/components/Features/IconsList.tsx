'use client';
import Icon from '@/base/Icon';
import Carousel from '@/features/Carousel';
import { useBreakpoint } from '@/features/useBreakpoint';
import icons from '@/utils/icons.json';
const IconsList = () => {
  const { isDesktop } = useBreakpoint();
  return (
    <div className="flex flex-wrap justify-center">
      {isDesktop ? (
        <>
          {icons.map((icon) => (
            <Icon
              src={icon.src}
              alt={icon.alt}
              description={icon.description}
              key={icon.description}
            />
          ))}
        </>
      ) : (
        <Carousel />
      )}
    </div>
  );
};
export default IconsList;
