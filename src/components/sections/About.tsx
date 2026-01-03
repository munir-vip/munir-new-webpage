import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Camera, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          opacity: 0,
          x: -60,
          duration: 1,
          ease: "power3.out"
        });
      }

      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          opacity: 0,
          y: 40,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out"
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 relative"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center gradient-text">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden glow-card">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop"
                alt="Munir"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl p-4 glow-card">
              <MapPin className="inline-block mr-2" size={20} />
              <span className="font-semibold">Based in UAE</span>
            </div>
          </div>

          <div ref={contentRef} className="space-y-6">
            <div className="glow-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Code2 className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Web Developer</h3>
                  <p className="text-muted-foreground">
                    Passionate about creating seamless, performant web applications with modern technologies.
                    Specializing in React, TypeScript, and full-stack development with a focus on exceptional
                    user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="glow-card p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Camera className="text-orange-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Photographer</h3>
                  <p className="text-muted-foreground">
                    Capturing the beauty of the UAE and beyond through landscape, architecture, and street
                    photography. Every frame tells a story, every shot preserves a moment in time.
                  </p>
                </div>
              </div>
            </div>

            <div className="glow-card p-6 rounded-xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10">
              <h3 className="text-xl font-semibold mb-3">The Journey</h3>
              <p className="text-muted-foreground mb-4">
                My dual passion for technology and visual art creates a unique perspective. The precision
                of code meets the creativity of photography, allowing me to build digital experiences that
                are not only functional but visually stunning.
              </p>
              <p className="text-muted-foreground">
                Whether I'm debugging complex code or framing the perfect shot, I'm driven by a commitment
                to excellence and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
