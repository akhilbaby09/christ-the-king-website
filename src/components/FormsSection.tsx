import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const forms = [
  {
    title: "Parish Registration Form",
    description: "Register as a new member of our parish family",
    icon: FileText,
  },
  {
    title: "Pre-Authorised Debit (PAD) Form",
    description: "Set up automatic contributions to support our parish",
    icon: FileText,
  },
  {
    title: "Baptism Registration Form",
    description: "Register for the sacrament of Baptism",
    icon: FileText,
  },
];

export const FormsSection = () => {
  return (
    <section id="forms" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Parish Forms
          </h2>
          <div className="section-divider mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            For easy access, you can download and submit any of the following parish forms.
          </p>
        </div>

        {/* Forms Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {forms.map((form) => (
            <div
              key={form.title}
              className="card-elevated p-8 text-center group hover:border-gold border border-transparent transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-burgundy/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-burgundy/20 transition-colors">
                <form.icon className="w-8 h-8 text-burgundy" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                {form.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-6">
                {form.description}
              </p>
              <Button
                variant="outline"
                className="border-burgundy text-burgundy hover:bg-burgundy hover:text-primary-foreground font-heading text-sm gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center font-body text-sm text-muted-foreground mt-12">
          Please contact the parish office if you have any questions about the forms.
        </p>
      </div>
    </section>
  );
};
