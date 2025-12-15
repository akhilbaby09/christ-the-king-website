import React from "react";
import { Navbar } from "@/components/Navbar";

/**
 * Parish Patrons page
 *
 * Place the provided image at: src/assets/parish-patrons/patrons.jpg
 * This file imports that image and displays it responsively. If the image
 * is missing the page will show a helpful placeholder and instructions.
 */

const ParishPatrons: React.FC = () => {
  // Try a static import path — if you prefer a dynamic approach, we can change this.
  let patronsSrc: string | undefined;
  try {
    // Uncomment the next line after the image is uploaded to the repo:
    // patronsSrc = require("@/assets/parish-patrons/patrons.jpg").default;
    // Or if your setup supports direct imports:
    // import patronsSrc from "@/assets/parish-patrons/patrons.jpg";
  } catch {
    patronsSrc = undefined;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground">Parish Patrons</h1>
          <p className="text-muted-foreground mt-2">
            Parish Council Members — 2024–26
          </p>
        </div>

        <section className="max-w-5xl mx-auto rounded-lg p-6">
          <div className="flex flex-col items-center gap-6">
            <div className="w-full">
              {patronsSrc ? (
                <img
                  src={patronsSrc}
                  alt="Parish Council Members 2024-26"
                  className="w-full h-auto rounded-md shadow-md"
                />
              ) : (
                <div className="w-full h-[70vh] flex items-center justify-center rounded-md border-2 border-dashed border-muted bg-muted/10">
                  <p className="text-center text-muted-foreground max-w-lg">
                    Parish patrons image not found. Upload the image to
                    <br />
                    <code>src/assets/parish-patrons/patrons.jpg</code>
                    <br />
                    (or update the import in this file) to display it here.
                  </p>
                </div>
              )}
            </div>

            <div className="w-full flex items-center justify-center gap-4">
              {patronsSrc ? (
                <a
                  href={patronsSrc}
                  download
                  className="inline-block px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90"
                >
                  Download Image
                </a>
              ) : (
                <button
                  type="button"
                  className="inline-block px-4 py-2 rounded-md bg-secondary text-secondary-foreground"
                  disabled
                >
                  Upload image to enable actions
                </button>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ParishPatrons;
