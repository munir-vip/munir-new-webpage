import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, MapPin, Camera as CameraIcon } from "lucide-react";
import { photos, photoCategories } from "@/data/photography";

gsap.registerPlugin(ScrollTrigger);

export default function Photography() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxPhoto, setLightboxPhoto] = useState<typeof photos[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredPhotos = selectedCategory === "All"
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  useEffect(() => {
    if (gridRef.current) {
      gsap.from(gridRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.08,
        duration: 0.6,
        ease: "back.out(1.7)"
      });
    }
  }, [filteredPhotos]);

  return (
    <section
      id="photography"
      ref={sectionRef}
      className="py-20 md:py-32 relative"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center gradient-text">
          Photography
        </h2>

        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Capturing the essence of the UAE through my lens, from sweeping landscapes to architectural marvels.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {photoCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                  : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setLightboxPhoto(photo)}
            >
              <div className="glow-card rounded-lg overflow-hidden hover:scale-[1.02] transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {photo.title}
                      </h3>
                      <p className="text-sm text-white/80 flex items-center gap-1">
                        <MapPin size={14} />
                        {photo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setLightboxPhoto(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            onClick={() => setLightboxPhoto(null)}
          >
            <X size={24} />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxPhoto.image}
              alt={lightboxPhoto.title}
              className="w-full h-auto rounded-lg mb-6"
            />

            <div className="glow-card p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{lightboxPhoto.title}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  <span>{lightboxPhoto.location}</span>
                </div>

                {lightboxPhoto.camera && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CameraIcon size={16} />
                    <span>{lightboxPhoto.camera}</span>
                  </div>
                )}

                {lightboxPhoto.lens && (
                  <div className="text-muted-foreground">
                    <span className="font-medium">Lens:</span> {lightboxPhoto.lens}
                  </div>
                )}

                {lightboxPhoto.settings && (
                  <div className="text-muted-foreground">
                    <span className="font-medium">Settings:</span> {lightboxPhoto.settings}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
