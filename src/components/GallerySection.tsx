import { useState } from "react";

// Import all gallery images from a folder automatically
const importGallery = () => {
  const images = import.meta.glob("@/assets/gallery/*.{jpg,jpeg,png,webp}", {
    eager: true,
  });
  return Object.values(images).map((img) => img.default);
};

export const GallerySection = () => {
  const photos = importGallery();
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Photo Gallery
          </h2>
          <div className="section-divider mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our parish community and events.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((src, index) => (
            <div
              key={index}
              onClick={() => setSelected(src)}
              className="cursor-pointer group relative"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="rounded-lg shadow-md object-cover w-full h-40 md:h-48 group-hover:opacity-80 transition"
              />
            </div>
          ))}
        </div>

        {/* Popup Lightbox */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <img
              src={selected}
              alt="Selected"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};
