import { Helmet } from 'react-helmet-async';
import { Shield, Heart, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - PhysioHealth Clinic</title>
        <meta name="description" content="Learn about our experienced team of physiotherapists and our commitment to providing exceptional care and rehabilitation services." />
        <meta name="keywords" content="physiotherapy clinic, about us, physiotherapists, rehabilitation team" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">About PhysioHealth</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Our Clinic"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Since 2010, PhysioHealth has been dedicated to providing exceptional physiotherapy care to our community. Our team of experienced professionals is committed to helping you achieve optimal physical health and wellness.
              </p>
              <p className="text-lg text-gray-700">
                We combine traditional physiotherapy techniques with modern technology and evidence-based practices to deliver the best possible outcomes for our patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every treatment and interaction</p>
            </div>
            <div className="text-center p-6">
              <Heart className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p className="text-gray-600">We provide care with understanding and empathy</p>
            </div>
            <div className="text-center p-6">
              <BookOpen className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">We believe in empowering patients through knowledge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Dr. Sarah Johnson"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dr. Sarah Johnson</h3>
                <p className="text-gray-600">Lead Physiotherapist</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Dr. Michael Chen"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dr. Michael Chen</h3>
                <p className="text-gray-600">Sports Rehabilitation Specialist</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Dr. Emma Wilson"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dr. Emma Wilson</h3>
                <p className="text-gray-600">Pediatric Physiotherapist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
