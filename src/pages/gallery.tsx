import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Navbar } from "@/components/Navbar";

export const Gallery = () => {
  const [images] = useState(
    Object.values(
      import.meta.glob("@/assets/gallery/**/*.{jpg,jpeg,png,webp}", { eager: true })
    ).map((img: any) => img.default)
  );

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Gallery</h1>
          <p className="text-muted-foreground">Explore our collection of memories</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-square"
              onClick={() => openLightbox(index)}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedImageIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black/95 border-none">
          <DialogTitle className="sr-only">
            Gallery Image {selectedImageIndex !== null ? selectedImageIndex + 1 : ''}
          </DialogTitle>
          {selectedImageIndex !== null && (
            <Carousel
              opts={{
                startIndex: selectedImageIndex,
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="flex items-center justify-center p-8">
                      <img
                        src={src}
                        alt={`Gallery image ${index + 1}`}
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
