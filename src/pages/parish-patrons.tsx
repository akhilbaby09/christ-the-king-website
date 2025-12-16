import React from "react";
import patronsImg from "@/assets/parish-patrons/patrons.jpg";
import { Navbar } from "@/components/Navbar";

const ParishPatrons: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Parish Patrons
          </h1>
          <p className="text-muted-foreground">
            The patrons of our parish.
          </p>
        </div>

        <section className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-md">
          <img
            src={patronsImg}
            alt="Parish Patrons"
            className="w-full h-auto object-contain"
          />
        </section>
      </div>
    </div>
  );
};

export default ParishPatrons;
