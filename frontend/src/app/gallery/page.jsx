"use client";

import React, { useState } from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Upload, Calendar, Users, Award, MapPin, Clock } from 'lucide-react';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All Photos');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = ['All Photos', 'Campus', 'Academics', 'Athletics', 'Arts', 'Events'];

  const galleryImages = [
    { id: 1, src: '/api/placeholder/300/200', category: 'Campus', title: 'Campus Life' },
    { id: 2, src: '/api/placeholder/300/200', category: 'Events', title: 'Graduation Ceremony' },
    { id: 3, src: '/api/placeholder/300/200', category: 'Academics', title: 'Science Class' },
    { id: 4, src: '/api/placeholder/300/200', category: 'Athletics', title: 'Basketball Game' },
    { id: 5, src: '/api/placeholder/300/200', category: 'Arts', title: 'Drama Performance' },
    { id: 6, src: '/api/placeholder/300/200', category: 'Events', title: 'School Concert' },
    { id: 7, src: '/api/placeholder/300/200', category: 'Academics', title: 'Lecture Hall' },
    { id: 8, src: '/api/placeholder/300/200', category: 'Campus', title: 'Student Activities' },
    { id: 9, src: '/api/placeholder/300/200', category: 'Academics', title: 'Lab Work' },
    { id: 10, src: '/api/placeholder/300/200', category: 'Campus', title: 'Outdoor Learning' },
    { id: 11, src: '/api/placeholder/300/200', category: 'Arts', title: 'Art Supplies' },
    { id: 12, src: '/api/placeholder/300/200', category: 'Campus', title: 'Group Study' }
  ];

  const featuredCollections = [
    {
      id: 1,
      title: 'Graduation 2023',
      description: 'Celebrating our seniors as they embark on their next chapter.',
      image: '/api/placeholder/400/250',
      photoCount: 45
    },
    {
      id: 2,
      title: 'Fall Festival 2022',
      description: 'A day of fun, games, and community building for everyone.',
      image: '/api/placeholder/400/250',
      photoCount: 32
    },
    {
      id: 3,
      title: 'Sports Highlights',
      description: 'Capturing athletic achievements throughout the year.',
      image: '/api/placeholder/400/250',
      photoCount: 78
    }
  ];

  const filteredImages = activeFilter === 'All Photos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="bg-white shadow-sm">
        <div className="bg-blue-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  <span>info@academyschool.edu</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:underline">Parent Portal</a>
                <a href="#" className="hover:underline">Student Portal</a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">ACADEMY</span>
              <span className="ml-2 text-2xl font-light text-orange-500">SCHOOL</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-900 hover:text-blue-600">About Us</a>
              <a href="#" className="text-gray-900 hover:text-blue-600">Admissions</a>
              <a href="#" className="text-gray-900 hover:text-blue-600">Funding</a>
              <a href="#" className="text-gray-900 hover:text-blue-600">Events</a>
              <a href="#" className="text-blue-600 border-b-2 border-blue-600">Gallery</a>
              <a href="#" className="text-gray-900 hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: "url('/api/placeholder/1200/600')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl text-white/90">
              Explore life at Academy School through our collection of photos showcasing our 
              vibrant community, activities, arts, and special events.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center space-x-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-colors mb-2 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold">{image.title}</h3>
                    <p className="text-sm text-gray-300">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Photo Collections</h2>
            <p className="text-xl text-gray-600">
              Explore our curated photo albums from special events and activities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCollections.map((collection) => (
              <div key={collection.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{collection.title}</h3>
                  <p className="text-gray-600 mb-4">{collection.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{collection.photoCount} photos</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      View Album →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Photos Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 lg:p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Share Your Photos</h2>
                <p className="text-blue-100 mb-6">
                  Are you a student, parent, or alumni with great photos from 
                  Academy School events? We'd love to feature them in our gallery!
                </p>
                <button className="bg-white text-blue-600 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                  <Upload className="w-5 h-5 mr-2" />
                  Submit Your Photos
                </button>
              </div>
              <div className="hidden md:block">
                <img
                  src="/api/placeholder/500/400"
                  alt="Student with camera"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest photos, events, and updates from Academy School.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-medium transition-colors">
                Subscribe Now
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-blue-400">ACADEMY</span>
                <span className="ml-2 text-2xl font-light text-orange-400">SCHOOL</span>
              </div>
              <p className="text-blue-200 mb-4">
                Providing quality education and fostering academic excellence since 1985.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-blue-200 hover:text-white cursor-pointer" />
                <Twitter className="w-6 h-6 text-blue-200 hover:text-white cursor-pointer" />
                <Instagram className="w-6 h-6 text-blue-200 hover:text-white cursor-pointer" />
                <Linkedin className="w-6 h-6 text-blue-200 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white">Home</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Admissions</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Funding Options</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Events</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Gallery</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white">Parent Portal</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Student Portal</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Academic Calendar</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Library</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Career Opportunities</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">News & Updates</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-200">123 Education Blvd, Academic City, AC 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="text-blue-200">(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="text-blue-200">info@academyschool.edu</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="font-semibold mb-2">Office Hours</h5>
                <div className="text-blue-200 text-sm">
                  <div className="flex items-center mb-1">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="ml-6">Saturday: 9:00 AM - 12:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2024 Academy School. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </footer> */}

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center text-white mt-4">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;