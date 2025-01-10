import { Helmet } from 'react-helmet-async';
import { Activity, PersonStanding, Heart, Brain, Bone, Baby } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: "General Physiotherapy",
    description: "Comprehensive assessment and treatment of musculoskeletal conditions, including back pain, neck pain, and joint problems.",
    benefits: ["Pain relief", "Improved mobility", "Better posture", "Strengthening exercises"]
  },
  {
    icon: PersonStanding,
    title: "Sports Rehabilitation",
    description: "Specialized treatment for sports-related injuries and performance enhancement programs for athletes.",
    benefits: ["Injury recovery", "Performance optimization", "Prevention strategies", "Sport-specific training"]
  },
  {
    icon: Heart,
    title: "Cardiac Rehabilitation",
    description: "Supervised programs to help patients recover from heart conditions and improve cardiovascular health.",
    benefits: ["Improved heart function", "Enhanced stamina", "Lifestyle modification", "Risk factor management"]
  },
  {
    icon: Brain,
    title: "Neurological Rehabilitation",
    description: "Treatment for conditions affecting the nervous system, including stroke recovery and multiple sclerosis.",
    benefits: ["Enhanced coordination", "Better balance", "Improved function", "Independence in daily activities"]
  },
  {
    icon: Bone,
    title: "Orthopedic Physiotherapy",
    description: "Treatment of conditions affecting bones, joints, and soft tissues, including post-surgical rehabilitation.",
    benefits: ["Joint mobility", "Pain management", "Strength recovery", "Return to activities"]
  },
  {
    icon: Baby,
    title: "Pediatric Physiotherapy",
    description: "Specialized care for children with developmental delays, injuries, or neurological conditions.",
    benefits: ["Motor development", "Coordination improvement", "Developmental support", "Family education"]
  }
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - PhysioHealth Clinic</title>
        <meta name="description" content="Comprehensive physiotherapy services including sports rehabilitation, orthopedic therapy, and specialized treatment programs." />
        <meta name="keywords" content="physiotherapy services, rehabilitation, sports therapy, orthopedic physiotherapy" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive physiotherapy care tailored to your specific needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <service.icon className="w-12 h-12 text-teal-600 mb-4" />
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <h3 className="font-semibold mb-2">Key Benefits:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing a Service?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us for a consultation and we'll help determine the best treatment plan for your needs.
          </p>
          <a
            href="/contact"
            className="bg-teal-600 text-white px-8 py-3 rounded-md inline-block hover:bg-teal-700 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;
