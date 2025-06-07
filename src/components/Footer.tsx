
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-purple text-white py-17">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/b4c1710e-31c8-4ff0-bfde-c69a74b2380f.png" 
              alt="LP Software Services" 
              className="h-16 w-auto mb-6"
            />
            <p className="text-purple-200 mb-6 leading-relaxed">
              LP Software Services provides elite software consulting, SAP solutions, 
              and skilled developers to help businesses scale and succeed in the digital landscape.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-coral" />
                <span className="text-purple-200">support@lpsoftwareservices.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-coral" />
                <span className="text-purple-200">+91 7770033359</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-coral" />
                <span className="text-purple-200">Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-purple-200">
              <li><a href="#" className="hover:text-white transition-colors">Outsourcing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Payroll Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SAP Technical Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Project Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Skilled Consultants</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-purple-200">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-200 text-center md:text-left">
            © 2024 LP Software Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-purple-200 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-purple-200 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-purple-200 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
