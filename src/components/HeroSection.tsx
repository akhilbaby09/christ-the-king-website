import { useState, useEffect } from "react";

import heroImage1 from "@/assets/main1.jpeg";
import heroImage2 from "@/assets/main2.jpeg";
import heroImage3 from "@/assets/main3.jpeg";
import heroImage4 from "@/assets/main4.jpeg";
import heroImage5 from "@/assets/main5.jpeg";

export const HeroSection = () => {
  const images = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5];
  const [currentImage, setCurrentImage] = useState(0);

  // Rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={images[currentImage]}
          alt="Christ The King Saskatoon church"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-4 text-shadow animate-slide-up">
          Christ The King Saskatoon
        </h1>
        <p className="font-heading text-xl md:text-2xl text-gold mb-6 animate-slide-up-delay">
          Everyone Belongs
        </p>
        <p className="font-body text-base md:text-lg text-cream/90 max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up-delay-2">
          Since 2015, Christ the King Saskatoon has been a spiritual home for the South Indian 
          Catholic community and all Saskatoon-area families seeking a warm, faith-filled environment. 
          We are a strong, loving community where people come together to worship, grow, and support one another.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-2">
          <a href="#about" className="btn-hero">Learn More</a>
          <a
            href="#contact"
            className="font-heading font-semibold px-8 py-4 rounded-sm border-2 border-cream/50 text-cream hover:bg-cream/10 transition-all duration-300"
          >
            Visit Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-cream/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};
