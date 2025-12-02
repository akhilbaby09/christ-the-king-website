import { Check } from "lucide-react";

const missionValues = [
  { title: "Acceptance", description: "Welcoming all who seek God's love" },
  { title: "Peace", description: "A sanctuary for rest and reflection" },
  { title: "Joy", description: "Celebrating our faith together" },
  { title: "Spiritual Growth", description: "Deepening our relationship with Christ" },
  { title: "Service", description: "Serving God through serving others" },
  { title: "Fellowship", description: "Building lasting bonds of community" },
];

export const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-burgundy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-4">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="font-body text-lg text-cream/80 max-w-3xl mx-auto">
            Our church stands as a beacon of hope for the South Indian community in Saskatoon. 
            We strive to be a place where faith flourishes and lives are transformed.
          </p>
        </div>

        {/* Mission Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {missionValues.map((value, index) => (
            <div
              key={value.title}
              className="bg-cream/10 backdrop-blur-sm rounded-lg p-6 border border-cream/20 hover:bg-cream/15 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-burgundy-dark" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-cream">
                  {value.title}
                </h3>
              </div>
              <p className="font-body text-sm text-cream/70 pl-11">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="font-body text-cream/80 mb-6">
            Join us and experience the transformative power of faith and community.
          </p>
          <a
            href="#contact"
            className="inline-block btn-hero"
          >
            Connect With Us
          </a>
        </div>
      </div>
    </section>
  );
};
