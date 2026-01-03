import gsap from "gsap";

export const animations = {
  hero: {
    nameReveal: {
      duration: 1.2,
      stagger: 0.05,
      ease: "power4.out"
    },
    tagline: {
      duration: 0.8,
      delay: 0.6,
      ease: "power3.out"
    },
    buttons: {
      duration: 0.8,
      stagger: 0.2,
      delay: 1,
      ease: "back.out(1.7)"
    }
  },
  scrollTrigger: {
    defaults: {
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  },
  card: {
    hover: {
      scale: 1.05,
      duration: 0.4,
      ease: "power2.out"
    }
  }
};

export const createScrollTriggerAnimation = (element: HTMLElement, options = {}) => {
  return gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      ...animations.scrollTrigger.defaults,
      ...options
    },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out"
  });
};
