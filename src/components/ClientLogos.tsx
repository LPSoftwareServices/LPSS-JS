
const ClientLogos = () => {
  const logos = [
    { name: "Microsoft", logo: "🏢" },
    { name: "Google", logo: "🔍" },
    { name: "Amazon", logo: "📦" },
    { name: "Netflix", logo: "🎬" },
    { name: "Adobe", logo: "🎨" },
    { name: "Salesforce", logo: "☁️" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-600">Join hundreds of companies that trust us with their development needs</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((client, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-2">{client.logo}</div>
              <div className="text-sm font-medium text-gray-700">{client.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
