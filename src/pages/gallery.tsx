import { useState } from "react";

// Auto-detect album folders and images
const importAlbums = () => {
  const files = import.meta.glob("@/assets/gallery/**/*.{jpg,jpeg,png,webp}", {
    eager: true,
  });

  const albums: Record<string, string[]> = {};

  Object.entries(files).forEach(([path, module]) => {
    const parts = path.split("/");
    const albumName = parts[parts.length - 2]; // parent folder (album)

    if (!albums[albumName]) albums[albumName] = [];
    albums[albumName].push((module as any).default);
  });

  return albums;
};

export default function GalleryPage() {
  const albums = importAlbums();
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-28 pb-20 bg-muted/30 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Photo Gallery
          </h2>
          <div className="section-divider mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore memorable moments from our parish events.
          </p>
        </div>

        {/* Album List */}
        {!activeAlbum && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(albums).map((album) => (
              <div
                key={album}
                className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition"
                onClick={() => setActiveAlbum(album)}
              >
                <h3 className="font-heading text-xl font-semibold text-center mb-2">
                  {album}
                </h3>

                <p className="text-center text-muted-foreground mb-3">
                  {albums[album].length} Photos
                </p>

                {albums[album][0] ? (
                  <img
                    src={albums[album][0]} // Album cover
                    className="rounded-lg h-40 w-full object-cover"
                  />
                ) : (
                  <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                    No Images
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Album Images Grid */}
        {activeAlbum && (
          <>
            <button
              onClick={() => setActiveAlbum(null)}
              className="mb-6 px-4 py-2 bg-primary text-white rounded"
            >
              ← Back to Albums
            </button>

            <h3 className="font-heading text-2xl font-bold mb-6">{activeAlbum}</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {albums[activeAlbum].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  className="rounded-lg cursor-pointer shadow transition object-cover w-full h-40 md:h-48"
                  onClick={() => setSelectedImage(src)}
                />
              ))}
            </div>
          </>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
}
