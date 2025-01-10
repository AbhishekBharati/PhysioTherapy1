import { Helmet } from 'react-helmet-async';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Treatment Room',
    description: 'Modern treatment facilities'
  },
  {
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Exercise Area',
    description: 'Fully equipped exercise space'
  },
  {
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Rehabilitation Equipment',
    description: 'State-of-the-art rehabilitation equipment'
  },
  {
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Consultation Room',
    description: 'Private consultation space'
  },
  {
    url: 'https://images.unsplash.com/photo-1598885511440-218a568970b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Reception Area',
    description: 'Welcoming reception space'
  },
  {
    url: 'https://images.unsplash.com/photo-1570174097350-c19e9c7bbc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Therapy Session',
    description: 'Professional therapy in action'
  }
];

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery - PhysioHealth Clinic</title>
        <meta name="description" content="Take a virtual tour of our modern physiotherapy clinic facilities and equipment." />
        <meta name="keywords" content="physiotherapy clinic gallery, facility photos, clinic tour" />
      </Helmet>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Facility</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                    <p>{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a visit to tour our facility in person and meet our team.
          </p>
          <a
            href="/contact"
            className="bg-teal-600 text-white px-8 py-3 rounded-md inline-block hover:bg-teal-700 transition-colors"
          >
            Book a Tour
          </a>
        </div>
      </section>
    </>
  );
};

export default Gallery;
