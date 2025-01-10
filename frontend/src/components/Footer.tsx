import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center"><Phone size={18} className="mr-2" /> (555) 123-4567</p>
              <p className="flex items-center"><Mail size={18} className="mr-2" /> info@physiohealth.com</p>
              <p className="flex items-center"><MapPin size={18} className="mr-2" /> 123 Health Street, Medical District</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2">
              <p className="flex items-center"><Clock size={18} className="mr-2" /> Mon-Fri: 8:00 AM - 7:00 PM</p>
              <p className="flex items-center"><Clock size={18} className="mr-2" /> Sat: 9:00 AM - 5:00 PM</p>
              <p className="flex items-center"><Clock size={18} className="mr-2" /> Sun: Closed</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-teal-300">Our Services</a></li>
              <li><a href="/about" className="hover:text-teal-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-teal-300">Book Appointment</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} PhysioHealth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
