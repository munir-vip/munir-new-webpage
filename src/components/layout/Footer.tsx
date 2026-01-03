import { Github, Linkedin, Instagram, Twitter, ArrowUp } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, url: SITE_CONFIG.social.github, label: "GitHub" },
    { icon: Linkedin, url: SITE_CONFIG.social.linkedin, label: "LinkedIn" },
    { icon: Instagram, url: SITE_CONFIG.social.instagram, label: "Instagram" },
    { icon: Twitter, url: SITE_CONFIG.social.twitter, label: "Twitter" }
  ];

  return (
    <footer className="relative bg-background border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-muted-foreground">
              Creating digital experiences and capturing moments that tell stories.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                About
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                Projects
              </a>
              <a href="#photography" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                Photography
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="text-muted-foreground group-hover:text-cyan-400 transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
}
