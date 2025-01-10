import { Helmet } from 'react-helmet-async';
import { ArrowRight, Activity, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PhysioHealth - Professional Physiotherapy Clinic</title>
        <meta name="description" content="Leading physiotherapy clinic offering expert treatment for pain relief, rehabilitation, and injury recovery. Book your appointment today." />
        <meta name="keywords" content="physiotherapy, physical therapy, rehabilitation, pain relief, sports injury" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Physiotherapy Session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Expert Physiotherapy Care</h1>
            <p className="text-xl mb-8 max-w-2xl">Restore your mobility and live pain-free with our professional physiotherapy services.</p>
            <Link to="/contact" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-md inline-flex items-center">
              Book Appointment <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Activity className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
              <p className="text-gray-600">Personalized treatment plans from certified physiotherapists</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-600">Dedicated professionals with years of experience</p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
              <p className="text-gray-600">State-of-the-art equipment and comfortable environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Recovery Journey?</h2>
          <p className="mb-8">Schedule your consultation today and take the first step towards better health.</p>
          <Link to="/contact" className="bg-white text-teal-600 px-8 py-3 rounded-md inline-flex items-center hover:bg-gray-100">
            Contact Us <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
