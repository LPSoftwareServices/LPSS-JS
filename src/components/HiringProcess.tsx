
import { CheckCircle, Search, Users, Rocket } from "lucide-react";

const HiringProcess = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "Share Your Needs",
      description: "Tell us about your project requirements, timeline, and desired skill sets.",
      color: "bg-brand-purple"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Meet Your Matches",
      description: "We'll match you with pre-vetted developers within 48 hours.",
      color: "bg-brand-coral"
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Start Building",
      description: "Begin your project with seamless onboarding and ongoing support.",
      color: "bg-brand-purple"
    }
  ];

  return (
    <section className="py-20 bg-brand-light-purple">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hire Pre-Vetted Engineers
            <br />
            <span className="text-brand-coral">In 3 Easy Steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, fast, and efficient process to get the right talent for your projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Developer Profile Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Developer" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">Rajesh Kumar</h3>
                  <p className="text-gray-600">Senior SAP Developer</p>
                  <div className="flex items-center mt-1">
                    <div className="flex text-yellow-400">
                      ★★★★★
                    </div>
                    <span className="text-sm text-gray-500 ml-2">5.0 (127 reviews)</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-brand-light-purple text-brand-purple px-3 py-1 rounded-full text-sm">SAP ABAP</span>
                    <span className="bg-brand-light-purple text-brand-purple px-3 py-1 rounded-full text-sm">Fiori</span>
                    <span className="bg-brand-light-purple text-brand-purple px-3 py-1 rounded-full text-sm">HANA</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                  <p className="text-gray-600 text-sm">8+ years in SAP development and implementation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className={`${step.color} rounded-full p-4 flex-shrink-0`}>
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="bg-gray-200 text-gray-600 text-sm font-bold px-2 py-1 rounded-full mr-3">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
