import { Heart, Users, Church } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who We Are
          </h2>
          <div className="section-divider mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            At Christ the King Saskatoon, we welcome every individual seeking God's love.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="font-body text-foreground leading-relaxed">
              Our doors—and our hearts—are open to every soul longing to experience the grace 
              of Jesus Christ. We invite you to come with an open heart and allow His presence 
              to fill your life with peace and purpose.
            </p>
            <p className="font-body text-foreground leading-relaxed">
              We are a diverse parish family, with members of all ages and backgrounds joining 
              together to worship, celebrate, and serve God's people. If you wish to learn more 
              or join us for a service, we would love to connect with you.
            </p>
            <blockquote className="border-l-4 border-gold pl-6 italic text-muted-foreground">
              "We're always happy to see you and warmly welcome visitors."
            </blockquote>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6">
            <div className="card-elevated p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-burgundy" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Open Hearts
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Everyone is welcome in our parish family, regardless of background or circumstance.
                </p>
              </div>
            </div>

            <div className="card-elevated p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-burgundy" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Strong Community
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  A loving community of like-minded congregants supporting one another in faith.
                </p>
              </div>
            </div>

            <div className="card-elevated p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                <Church className="w-6 h-6 text-burgundy" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Spiritual Home
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  A place to grow in faith, find peace, and experience God's grace since 2015.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
