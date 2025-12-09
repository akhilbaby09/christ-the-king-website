export const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-burgundy relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-4">
            This Week Mass Schedule
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
        </div>

        {/* Mass Schedule */}
        <div className="grid sm:grid-cols-2 gap-10 max-w-4xl mx-auto text-cream">

          {/* Mission House */}
          <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-6 border border-cream/20">
            <h3 className="font-heading text-xl font-semibold mb-4 text-gold">
              Mission House
            </h3>
            <ul className="space-y-2 font-body text-cream/80">
              <li>Monday — 9:30 AM</li>
              <li>Tuesday — 6:00 PM</li>
              <li>Wednesday — 6:00 PM</li>
              <li>Sunday — 11:00 AM</li>
            </ul>
          </div>

          {/* St Michael's Church */}
          <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-6 border border-cream/20">
            <h3 className="font-heading text-xl font-semibold mb-4 text-gold">
              St Michael's Church
            </h3>
            <ul className="space-y-2 font-body text-cream/80">
              <li>Thursday — 6:00 PM</li>
              <li>Friday — 6:00 PM</li>
              <li>Saturday — 9:30 AM</li>
              <li>Sunday — 5:30 PM</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
