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
              Kerala is a state on the southwestern Malabar Coast of India. It was formed on 1 November 1956, following the passage of the States Reorganization Act, by combining Malayalam-speaking regions of the erstwhile states of Travancore-Cochin and Madras. Spread over 38,863 km2 (15,005 sq mi), Kerala is the twenty-first largest Indian state by area. It is bordered by Karnataka to the north and northeast, Tamil Nadu to the east and south, and the Lakshadweep Sea to the west. With 33,387,677 inhabitants as per the 2011 Census, Kerala is the thirteenth-largest Indian state by population. It is divided into 14 districts with the capital being Thiruvananthapuram. Malayalam is the most widely spoken language and is also the official language of the state.
            </p>
            <p className="font-body text-foreground leading-relaxed">
             The Syro-Malabar Catholic Eparchy of Mississauga is an eparchy for all Syro-Malabar Catholics in Canada. It comprises 16 churches and 39 missions. Most churches are found in the province of Ontario.
The Cathedral for the Syro Malabars in Canada is the St Alphonsa Cathedral of Mississauga. The Cathedral was purchased in the 2010s. The first Church purchased was St Thomas Syro Malabar Catholic Church Scarborough, which is currently the second largest Syro Malabar Church in Canada. All the parishes and Missions have significant and growing populations. The Syro-Malabar Catholic Church is a Major Archiepiscopal Church in full communion with the Roman Catholic Church.
            </p>
<p className="font-body text-foreground leading-relaxed">
            The first Syro-Malabar holy mass in Saskatoon was celebrated in June 2009 at St. Marys’ Church, Saskatoon.
The first family prayer meeting was also started in August 2013 at Thomas Valakkamattathil’s house. Since then, the family prayer meeting was rotated through other families every month.
In Sep 2015 we started our kids’ catechism once in every month by Smino Varghese and Binu Jacob.
In September 2015 Exarchate for Syro-Malabar in Canada was formed and the Bishop of the Exarchate Bishop Mar Jose Kalluvelil expressed his desire to visit Saskatoon. The Bishop’s visit on 29th Nov 2015 was celebrated with a holy mass by Bishop and Fr. Raphael at St. Michaels church.
During this visit Bishop officially declared Saskatoon as a Syro-Malabar parish and named Christ The King. Bishop also insists us to celebrate two holy mass every month, which was celebrated on Second and Fourth Sunday
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
