import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollManager() {
  useEffect(() => {
    // General scroll-triggered animation for all elements with '.animate-on-scroll'
    gsap.from('.animate-on-scroll', {
      scrollTrigger: {
        trigger: '.animate-on-scroll',
        start: 'top 80%',
        end: 'bottom top',
        toggleActions: 'play none none reverse', // This makes the animation play on enter and reverse on leave
        markers: false, // Set to true to see the start and end of triggers (useful for debugging)
        once: false, // Allow the animation to trigger again when scrolling back up
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out', // Smooth easing
    });

    // Example of adding a scale effect to another section
    gsap.from('.scale-on-scroll', {
      scrollTrigger: {
        trigger: '.scale-on-scroll',
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      scale: 0.5,
      opacity: 0,
      duration: 1.2,
      ease: 'back.out(1.7)', // Bounce easing for a fun effect
    });

    // Example of rotating an element on scroll
    gsap.from('.rotate-on-scroll', {
      scrollTrigger: {
        trigger: '.rotate-on-scroll',
        start: 'top 60%',
        toggleActions: 'play none none none',
      },
      rotation: 90,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.inOut', // Smoother rotation easing
    });
  }, []);

  return null;
}
