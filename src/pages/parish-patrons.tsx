import React from "react";
import patronsImg from "@/assets/parish-patrons/patrons.jpg";

const ParishPatrons: React.FC = () => {
  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-slate-900">
            Parish Patrons
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            The patrons of our parish.
          </p>
        </header>

        <section className="rounded-2xl overflow-hidden shadow-md">
          <img
            src={patronsImg}
            alt="Parish Patrons"
            className="w-full h-auto block"
          />
        </section>
      </div>
    </main>
  );
};

export default ParishPatrons;
