import { useState } from "react";
import { Menu, X, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Mission", href: "#mission" },
  { name: "Forms", href: "#forms" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-burgundy flex items-center justify-center">
              <Cross className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h1 className="font-heading text-lg font-semibold text-foreground leading-tight">
                Christ The King Saskatoon
              </h1>
              <p className="text-xs text-muted-foreground">Syro - Malabar Catholic Church</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-sm text-foreground hover:text-burgundy transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-burgundy hover:bg-burgundy-dark text-primary-foreground font-heading text-sm px-6">
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-foreground hover:text-burgundy transition-colors px-2 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-burgundy hover:bg-burgundy-dark text-primary-foreground font-heading mt-2">
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
