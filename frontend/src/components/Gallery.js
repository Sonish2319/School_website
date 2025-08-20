// components/VibhutiGallery.js
import Image from 'next/image';

const VibhutiGallery = () => {
  const galleryImages = [
    { src: '/gallery-1.jpg', alt: 'School Building Exterior' },
    { src: '/gallery-2.jpg', alt: 'Modern Architecture' },
    { src: '/gallery-3.jpg', alt: 'Classroom Interior' },
    { src: '/gallery-4.jpg', alt: 'School Facilities' },
    { src: '/gallery-5.jpg', alt: 'Students in Action' },
    { src: '/gallery-6.jpg', alt: 'Campus View' },
    { src: '/gallery-7.jpg', alt: 'Building Design' },
    { src: '/gallery-8.jpg', alt: 'School Infrastructure' },
    { src: '/gallery-9.jpg', alt: 'Academic Spaces' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Vibhuti Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our beautiful campus, modern facilities, and vibrant school community 
            through our photo gallery.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer
                ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                ${index === 4 ? 'md:col-span-2' : ''}
                ${index === 7 ? 'md:row-span-2' : ''}
              `}
            >
              <div className={`relative ${
                index === 0 ? 'h-80 md:h-full' : 
                index === 4 ? 'h-48' : 
                index === 7 ? 'h-80' : 'h-48'
              }`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default VibhutiGallery;