import { useState, useEffect, useMemo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Navbar } from "@/components/Navbar";

export const Gallery = () => {
  // Import all images under gallery and group by folder name
  const albums = useMemo(() => {
    // `modules` keys are the matched path strings, values are module objects (eager)
    const modules = import.meta.glob(
      "@/assets/gallery/**/*.{jpg,jpeg,png,webp}",
      { eager: true }
    ) as Record<string, any>;

    return Object.entries(modules).reduce<Record<string, string[]>>(
      (acc, [path, mod]) => {
        // Normalize and extract the folder name after "gallery"
        // Path could contain segments like ".../gallery/AlbumName/image.jpg"
        const parts = path.split(/[\\/]/);
        const galleryIndex = parts.findIndex((p) => p === "gallery");
        const albumName =
          galleryIndex >= 0 && parts.length > galleryIndex + 1
            ? parts[galleryIndex + 1]
            : "uncategorized";

        acc[albumName] = acc[albumName] || [];
        // module may be { default: url } — keep defensive typing
        const url = (mod && (mod.default ?? mod)) || "";
        if (url) acc[albumName].push(url);
        return acc;
      },
      {}
    );
  }, []);

  const albumNames = Object.keys(albums);

  const [activeAlbum, setActiveAlbum] = useState<string | null>(
    albumNames[0] ?? null
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [api, setApi] = useState<CarouselApi | undefined>();

  const openLightbox = (album: string, index: number) => {
    setActiveAlbum(album);
    setSelectedImageIndex(index);
    // reset api so the carousel will re-bind for the new album
    setApi(undefined);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    // keep activeAlbum so next open remembers it, or clear if you prefer:
    // setActiveAlbum(null);
  };

  // Scroll to the selected image when the carousel is initialized
  useEffect(() => {
    if (api && selectedImageIndex !== null) {
      api.scrollTo(selectedImageIndex);
    }
  }, [api, selectedImageIndex]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Gallery</h1>
          <p className="text-muted-foreground">
            Explore our collection of memories
          </p>
        </div>

        {albumNames.length === 0 && (
          <p className="text-center text-muted-foreground">
            No images found in the gallery.
          </p>
        )}

        {albumNames.map((album) => (
          <section key={album} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-foreground">
                {album}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {albums[album].map((src, index) => (
                <div
                  key={`${album}-${index}`}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-square"
                  onClick={() => openLightbox(album, index)}
                >
                  <img
                    src={src}
                    alt={`${album} image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Dialog open={selectedImageIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black/95 border-none">
          <DialogTitle className="sr-only">
            Gallery Image{" "}
            {selectedImageIndex !== null ? selectedImageIndex + 1 : ""}
          </DialogTitle>

          {selectedImageIndex !== null && activeAlbum && (
            <Carousel
              opts={{
                loop: true,
              }}
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent>
                {albums[activeAlbum].map((src, index) => (
                  <CarouselItem key={`${activeAlbum}-item-${index}`}>
                    <div className="flex items-center justify-center p-8">
                      <img
                        src={src}
                        alt={`${activeAlbum} image ${index + 1}`}
                        className="max-h-[80vh] max-w-full object-contain rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
