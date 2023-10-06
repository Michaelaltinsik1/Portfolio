'use client';
import type { TouchEvent } from 'react';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import Icon from '@/base/Icon';
import icons from '@/utils/icons.json';

const MINTOUCHMOVEMENT = 5;
const MOBILENROFREVIEWCARDSCONTAINER = 3;
const TABLETNROFREVIEWCARDSCONTAINER = 6;
const DESKTOPNROFREVIEWCARDSCONTAINER = 3;

const MOBILE_SCREEN_MAX = 768;
const TABLETSCREEN_SCREEN_MAX = 1200;

enum Devices {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

const Carousel = () => {
  const [currentXPosition, setCurrentXPosition] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const [value, setValue] = useState<number>(0);
  const [touchPos, setTouchPos] = useState<number | null>(null);
  const [touchPosY, setTouchPosY] = useState<number | null>(null);
  const [nrOfElementsToShifts, setNrOfElementsToShifts] = useState<number>(1);
  const [nrOfContainers, setNrOfContainers] = useState<number>(
    Math.ceil(icons.length / nrOfElementsToShifts)
  );
  const [isShiftAdjusted, setIsShiftAdjusted] = useState<boolean>(false);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const currDeviceType = useRef<Devices | null>(null);
  /**
   * Keeps track if the window width changes
   * and updates nrOfElementsToShifts
   * Resets the index to the first reviewcards
   * when screensize is modified
   */

  useEffect(() => {
    function handleResize() {
      const currScreenWidth = getWindowWidth();
      setNrOfElementsToShifts(calculateNrOfShifts(currScreenWidth));
      let currDevice = findDeviceType(currScreenWidth);
      if (currDeviceType.current !== currDevice) {
        currDeviceType.current = currDevice;
        setIndex(0);
        setCurrentXPosition(0);
        setIsShiftAdjusted(false);
      }
    }
    if (window) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /**
   * Updates the amount of containers based on the screenwidth and reviewCardData Length
   */
  useEffect(() => {
    setNrOfContainers(Math.ceil(icons.length / nrOfElementsToShifts));
  }, [nrOfElementsToShifts]);

  useEffect(() => {
    if (window) {
      const screenWidth = getWindowWidth();
      let currDevice = findDeviceType(screenWidth);
      if (currDeviceType.current !== currDevice) {
        currDeviceType.current = currDevice;
      }
      setNrOfElementsToShifts(calculateNrOfShifts(screenWidth));
    } else {
      setNrOfElementsToShifts(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function findDeviceType(screenWidth: number): Devices {
    if (screenWidth <= MOBILE_SCREEN_MAX) {
      return Devices.MOBILE;
    } else if (screenWidth <= TABLETSCREEN_SCREEN_MAX) {
      return Devices.TABLET;
    } else {
      return Devices.DESKTOP;
    }
  }

  /**
   * @param screenWidth Takes a screenWidth as an argument
   * @returns returns 1 if mobile, 2 if tablet  and else 3 for desktop and xl desktop
   */
  function calculateNrOfShifts(screenWidth: number): number {
    if (screenWidth >= 0 && screenWidth <= MOBILE_SCREEN_MAX) {
      return MOBILENROFREVIEWCARDSCONTAINER;
    } else if (
      screenWidth > MOBILE_SCREEN_MAX &&
      screenWidth <= TABLETSCREEN_SCREEN_MAX
    ) {
      return TABLETNROFREVIEWCARDSCONTAINER;
    } else {
      return DESKTOPNROFREVIEWCARDSCONTAINER;
    }
  }
  /**
   * @returns return the innerwidth of the window. If window is undefined returns 0
   */
  function getWindowWidth() {
    if (window) return window.innerWidth;
    else return 0;
  }
  /**
   * Gets current x position when the touchstartevent happens
   * @param e Touchevent
   */
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    const touchDownY = e.touches[0].clientY;
    setTouchPos(touchDown);
    setTouchPosY(touchDownY);
  };
  /**
   * Handles touchmoveevent. Checks if there was a difference bigger than
   * MINTOUCHMOVEMENT. If positive right swipe happened if negative left
   * swipe happened
   * @param e Touchevent
   * @returnsif touchdown is null we just return
   */
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPos;
    const touchDownY = touchPosY;
    if (touchDown === null || touchDownY === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const currentTouchY = e.touches[0].clientY;
    const diff = touchDown - currentTouch;
    const diffx = Math.abs(touchDown - currentTouch);
    const diffY = Math.abs(touchDownY - currentTouchY);
    if (diffY > diffx) {
      setIsSwiping(false);
    } else {
      setIsSwiping(true);
      if (diff > MINTOUCHMOVEMENT) {
        shiftForward();
      }
      if (diff < -MINTOUCHMOVEMENT) {
        shiftBackWards();
      }
    }

    setTouchPos(null);
    setTouchPosY(null);
  };
  /**
   * Checks if the total amount of reviewcards modulo NrOfElementsToShift is zero
   * (Is equally divisible by NrOfElementsToShift)
   * if it is just increment x pos by 100% everytime we shift forward
   * If it has a remainder then calculate the procentage to shift forward
   * and use increment with the procentage to get NrOfElementsToShift cards on
   * every container
   */
  function shiftForward() {
    if (icons.length % nrOfElementsToShifts === 0) {
      if (index + 1 < nrOfContainers) {
        setCurrentXPosition((prevPos) => prevPos + 100);
        setIndex((currIndex) => currIndex + 1);
      }
    } else {
      if (index === nrOfContainers - 2 && !isShiftAdjusted) {
        setIsShiftAdjusted(true);
        let procentage =
          ((icons.length % nrOfElementsToShifts) / nrOfElementsToShifts) * 100;
        setCurrentXPosition((prevPos) => prevPos + procentage);

        setIndex((currIndex) => currIndex + 1);
      } else if (index + 1 < nrOfContainers) {
        setCurrentXPosition((prevPos) => prevPos + 100);
        setIndex((currIndex) => currIndex + 1);
      }
    }
  }
  /**
   * Checks if modulo is zero of reviewcard length and nrOfElementsToShifts
   * if modulo is zero then just decrement pos by 100% everytime and index by one
   * if modulo is not zero decrement pos by 100% until we reach index 1. Then
   * we decrement index by one and reset the currentpos to 0%
   */
  function shiftBackWards() {
    if (icons.length % nrOfElementsToShifts === 0) {
      if (index > 0) {
        setCurrentXPosition((prevPos) => prevPos - 100);
        setIndex((currIndex) => currIndex - 1);
      }
    } else {
      if (index === 1) {
        setCurrentXPosition(0);
        setIndex((currIndex) => currIndex - 1);
        setIsShiftAdjusted(false);
      } else if (index > 1) {
        setCurrentXPosition((prevPos) => prevPos - 100);
        setIndex((currIndex) => currIndex - 1);
      }
    }
  }

  useEffect(() => {
    const temp = ((index + 1) / nrOfContainers) * 100;
    setValue(temp);
  }, [index, nrOfContainers]);

  return (
    <>
      {/* //outter div */}
      <div className="overflow-hidden desktop:hidden">
        {/* inner div */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          style={{
            transition: 'transform 0.7s',
            transform: `translateX(${-currentXPosition}%)`,
          }}
          className={`box-border flex w-full ${
            isSwiping ? 'touch-pan-x' : 'touch-pan-y'
          }

          `}
        >
          {icons.map((icon) => (
            <Icon
              key={icon.description}
              src={icon.src}
              alt={icon.alt}
              description={icon.description}
            />
          ))}
        </div>
      </div>
      <div className="mx-4 mt-8 min-h-[6px] rounded-[11px] bg-tertiary desktop:hidden">
        <div
          style={{ width: `calc(${value}%)` }}
          className={`min-h-[6px] rounded-[4px] bg-primary-invert`}
        ></div>
      </div>
    </>
  );
};
export default Carousel;
