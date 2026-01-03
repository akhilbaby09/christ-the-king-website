export const MissionSection = () => {
  return (
    <section id="masstime" className="py-20 bg-burgundy relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-4">
            Mass will be celebrated on Sundays only until further notice, as Fr. John is out of the country.
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
        </div>

        {/* Mass Schedule */}
        <div className="grid sm:grid-cols-2 gap-10 max-w-4xl mx-auto text-cream">

          {/* Mission House */}
          <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-6 border border-cream/20">
            <h3 className="font-heading text-xl font-semibold mb-2 text-cream">
              Mission House
            </h3>

            {/* Address */}
            <a
              href="https://www.google.com/maps?q=Unit+22,+202+McKague+Cres,+Saskatoon,+SK+S7R+0L8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream hover:text-gold text-sm inline-block mb-4 underline"
            >
              Unit 22, 202 McKague Cres, Saskatoon, SK S7R 0L8
            </a>

            {/* Timings */}
            <ul className="space-y-2 font-body text-cream">
              <li>Monday — 9:30 AM</li>
              <li>Tuesday — 6:00 PM</li>
              <li>Wednesday — 6:00 PM</li>
              <li>Sunday — 11:00 AM</li>
            </ul>
          </div>

          {/* St Michael's Church */}
          <div className="bg-cream/10 backdrop-blur-sm rounded-lg p-6 border border-cream/20">
            <h3 className="font-heading text-xl font-semibold mb-2 text-cream">
              St Michael's Church
            </h3>

            {/* Address */}
            <a
              href="https://www.google.com/maps?q=18+33rd+St+E,+Saskatoon,+SK+S7K+0R7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream hover:text-gold text-sm inline-block mb-4 underline"
            >
              18 33rd St E, Saskatoon, SK S7K 0R7
            </a>

            {/* Timings */}
            <ul className="space-y-2 font-body text-cream">
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
