import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = (target, options = {}) => {
  gsap.from(target, {
    scrollTrigger: {
      trigger: target,
      start: 'top 80%',
      toggleActions: 'play none none none',
      ...options.trigger,
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ...options.gsap,
  });
};
