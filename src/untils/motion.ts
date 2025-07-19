export function slideInFromLeft(delay: number) {
    return {
      hidden: { x: -100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }
  
  export function slideInFromRight(delay: number) {
    return {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  }
  
  export const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };
import { useAnimation, useInView } from 'framer-motion';
import { useEffect } from 'react';

export const useScrollAnimation = (ref: React.RefObject<HTMLElement>) => {
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
      });
    }
  }, [isInView, controls]);

  return {
    initial: { opacity: 0, y: 50 },
    animate: controls,
  };
};