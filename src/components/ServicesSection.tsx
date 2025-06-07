
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Settings, Headphones, Briefcase, UserCheck, Cog } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Users className="w-10 h-10 text-brand-coral" />,
      title: "Outsourcing",
      description: "Complete project outsourcing with dedicated teams of experienced developers and consultants."
    },
    {
      icon: <Settings className="w-10 h-10 text-brand-coral" />,
      title: "Running Payroll",
      description: "Comprehensive payroll management services to streamline your HR operations and compliance."
    },
    {
      icon: <Cog className="w-10 h-10 text-brand-coral" />,
      title: "SAP Technical Support",
      description: "Expert SAP technical support and consulting services to optimize your enterprise systems."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-brand-coral" />,
      title: "Project Support",
      description: "End-to-end project support services from planning to deployment and maintenance."
    },
    {
      icon: <UserCheck className="w-10 h-10 text-brand-coral" />,
      title: "Skilled Consultants",
      description: "Access to pre-vetted, experienced consultants across various technology domains."
    },
    {
      icon: <Headphones className="w-10 h-10 text-brand-coral" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance for all your software solutions."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-brand-coral">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software solutions and consulting services to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-brand-purple transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
