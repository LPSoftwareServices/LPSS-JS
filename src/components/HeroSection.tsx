
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-brand-purple via-brand-purple to-purple-800 text-white py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
              <CheckCircle className="w-4 h-4 mr-2 text-brand-coral" />
              <span className="text-sm font-medium">Elite Vetted Developers on Demand</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Scale Your Team with 
              <span className="text-brand-coral"> Expert </span>
              Software Consultants
            </h1>
            
            <p className="text-xl lg:text-2xl text-purple-100 mb-8 leading-relaxed">
              Access pre-vetted developers, SAP specialists, and skilled consultants. 
              From project support to complete outsourcing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-brand-coral hover:bg-brand-coral/90 text-white">
                Hire Developers
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-purple">
                View Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-brand-coral">350K+</div>
                <div className="text-purple-200">Developers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-coral">98%</div>
                <div className="text-purple-200">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-coral">24/7</div>
                <div className="text-purple-200">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Team collaboration" 
                className="rounded-xl w-full h-80 object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white text-brand-purple p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support Available</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-brand-coral text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">2000+</div>
                <div className="text-sm">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
