
import { useState } from "react";
import { Search, Users, Rocket, Code2 } from "lucide-react";

const HiringProcess = () => {
  const [active, setActive] = useState(0);
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

  const engineers = [
    {
      name: "Rajesh K.",
      role: "Senior SAP Developer",
      rating: "5.0",
      reviews: 127,
      skills: ["SAP ABAP", "Fiori", "HANA"],
      experience: "8+ years in SAP development and implementation",
      gradient: "from-brand-purple to-brand-coral",
    },
    {
      name: "Priya S.",
      role: "Full-Stack Engineer",
      rating: "4.9",
      reviews: 98,
      skills: ["React", "Node.js", "AWS"],
      experience: "6+ years building scalable web platforms",
      gradient: "from-brand-coral to-brand-purple",
    },
    {
      name: "Arjun M.",
      role: "Data & AI Engineer",
      rating: "5.0",
      reviews: 84,
      skills: ["Python", "ML Ops", "Snowflake"],
      experience: "7+ years in data engineering and AI systems",
      gradient: "from-brand-purple to-purple-400",
    },
  ];

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

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
          {/* Left side - Engineer Profile Cards (click to switch) */}
          <div className="relative max-w-md mx-auto w-full">
            <div className="relative h-[380px]">
              {engineers.map((eng, i) => {
                const offset = i - active;
                const isActive = i === active;
                return (
                  <button
                    type="button"
                    key={eng.name}
                    onClick={() => setActive(i)}
                    aria-label={`View ${eng.name}`}
                    aria-pressed={isActive}
                    className="absolute inset-x-0 text-left bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                    style={{
                      top: `${Math.abs(offset) * 18}px`,
                      transform: `translateX(${offset * 14}px) rotate(${offset * 3}deg) scale(${isActive ? 1 : 0.95})`,
                      zIndex: engineers.length - Math.abs(offset),
                      opacity: isActive ? 1 : 0.55,
                      pointerEvents: isActive ? "auto" : "auto",
                      cursor: isActive ? "default" : "pointer",
                    }}
                  >
                    <div className="flex items-center mb-5">
                      <div
                        className={`w-16 h-16 rounded-full mr-4 bg-gradient-to-br ${eng.gradient} flex items-center justify-center text-white font-bold text-lg shadow-md relative`}
                        aria-hidden="true"
                      >
                        {getInitials(eng.name)}
                        <span className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow">
                          <Code2 className="w-3 h-3 text-brand-purple" />
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{eng.name}</h3>
                        <p className="text-gray-600 text-sm">{eng.role}</p>
                        <div className="flex items-center mt-1">
                          <div className="flex text-yellow-400 text-sm">★★★★★</div>
                          <span className="text-xs text-gray-500 ml-2">
                            {eng.rating} ({eng.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {eng.skills.map((s) => (
                            <span
                              key={s}
                              className="bg-brand-light-purple text-brand-purple px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm">Experience</h4>
                        <p className="text-gray-600 text-sm">{eng.experience}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {engineers.map((eng, i) => (
                <button
                  key={eng.name}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show ${eng.name}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-brand-purple" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
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
