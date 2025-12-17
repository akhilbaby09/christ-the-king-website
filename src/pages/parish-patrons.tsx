import { Navbar } from "@/components/Navbar";
import patronsImg from "@/assets/parish-patrons/patrons.jpg";

const ParishPatrons: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <header className="px-6 py-6 border-b">
            <h1 className="text-2xl font-semibold text-slate-900">
              Parish Patrons
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              The patrons of our parish.
            </p>
          </header>

          <section className="p-6">
            <div className="rounded-lg overflow-hidden">
              <img
                src={patronsImg}
                alt="Parish Patrons"
                className="w-full h-auto block rounded-md"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ParishPatrons;
