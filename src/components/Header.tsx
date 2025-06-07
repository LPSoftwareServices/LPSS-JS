
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/4fbaa8f6-998f-4765-8051-3f0d2a906f52.png" 
              alt="LP Software Services" 
              className="h-24 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-brand-purple transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-brand-purple transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-brand-purple transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-brand-purple transition-colors">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-brand-purple transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-brand-purple transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-brand-purple transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-brand-purple transition-colors">Contact</a>
              <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white w-full mt-4">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
