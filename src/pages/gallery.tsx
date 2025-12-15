import { useState } from "react";

export const Gallery = () => {
  const [images] = useState(
    Object.values(
      import.meta.glob("@/assets/gallery/*.{jpg,jpeg,png,webp}", { eager: true })
    ).map((img: any) => img.default)
  );

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`gallery-${index}`}
          style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "8px" }}
        />
      ))}
    </div>
  );
};

export default Gallery;
