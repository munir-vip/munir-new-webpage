import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import { animations } from "@/lib/animations";

export default function Hero() {
  const nameRef = useRef<HTMLHeadElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      if (nameRef.current) {
        const chars = nameRef.current.textContent?.split('') || [];
        nameRef.current.innerHTML = chars.map(char =>
          `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');

        timeline.from(nameRef.current.children, {
          opacity: 0,
          y: 50,
          rotationX: -90,
          stagger: animations.hero.nameReveal.stagger,
          duration: animations.hero.nameReveal.duration,
          ease: animations.hero.nameReveal.ease
        });
      }

      if (taglineRef.current) {
        timeline.from(taglineRef.current, {
          opacity: 0,
          y: 30,
          duration: animations.hero.tagline.duration,
          ease: animations.hero.tagline.ease
        }, `-=${animations.hero.tagline.delay}`);
      }

      if (buttonsRef.current) {
        timeline.from(buttonsRef.current.children, {
          opacity: 0,
          y: 30,
          scale: 0.9,
          stagger: animations.hero.buttons.stagger,
          duration: animations.hero.buttons.duration,
          ease: animations.hero.buttons.ease
        }, `-=${animations.hero.buttons.delay}`);
      }
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1
          ref={nameRef}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 gradient-text"
        >
          Munir
        </h1>

        <p
          ref={taglineRef}
          className="text-xl md:text-3xl text-muted-foreground mb-8 font-light"
        >
          Web Developer <span className="text-cyan-400">&</span> Photographer
        </p>

        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-blur" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
          Based in the UAE, crafting immersive digital experiences and capturing moments that tell stories.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-medium overflow-hidden hover:scale-105 transition-transform"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button
            onClick={() => scrollToSection('photography')}
            className="group px-8 py-4 border-2 border-orange-500/50 rounded-lg font-medium hover:border-orange-500 hover:bg-orange-500/10 transition-all relative overflow-hidden"
          >
            <span className="relative z-10">Photography Gallery</span>
            <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors" />
          </button>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
