"use client";
import React, { useState } from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Upload, Calendar, Users, Award, MapPin, Clock } from 'lucide-react';
import { useFetchData } from '../../store/hooks/useFetchData';
const BASE_URL_MEDIA = 'http://localhost:9000';
import Image from 'next/image';
import Link from 'next/link';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All Photos');
  const [selectedImage, setSelectedImage] = useState(null);

  const { data: hero, error: heroError, loading: heroLoading } = useFetchData('/api/gallery/hero');
  const { data: category, error: commError, loading: commLoading } = useFetchData('/api/gallery/category');

  const isLoading = heroLoading || commLoading;
  const error = heroError || commError;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Filters: 'All Photos' + category titles (no static fallback files)
  const filters = (() => {
    if (Array.isArray(category) && category.length > 0) {
      return ['All Photos', ...category.map((c) => c.title)];
    }
    return ['All Photos'];
  })();

  // Flatten gallery images from category -> photos[*].photos (stringified JSON) (no static placeholders)
  const galleryImages = (() => {
    const imgs = [];
    if (!Array.isArray(category)) return imgs;

    category.forEach((cat) => {
      if (!Array.isArray(cat.photos)) return;
      cat.photos.forEach((photoObj) => {
        let parsed = [];
        try {
          parsed = photoObj.photos ? JSON.parse(photoObj.photos) : [];
        } catch (e) {
          // if parsing fails and it's already an array, use it
          if (Array.isArray(photoObj.photos)) parsed = photoObj.photos;
        }

        if (!Array.isArray(parsed)) return;
        parsed.forEach((photoPath, idx) => {
          // ensure photoPath is a string
          if (!photoPath) return;
          imgs.push({
            id: `${cat.id}-${photoObj.id}-${idx}`,
            src: `${BASE_URL_MEDIA}${photoPath}`,
            category: cat.title,
            title: photoObj.feature_title || photoObj.description || cat.title || 'Photo'
          });
        });
      });
    });

    return imgs;
  })();

  // Featured collections from categories where isFeatured === true (no static images)
  const featuredCollections = (() => {
    if (!Array.isArray(category)) return [];

    return category
      .filter((c) => c.isFeatured)
      .map((c) => {
        let allPhotos = [];
        if (Array.isArray(c.photos)) {
          c.photos.forEach((p) => {
            try {
              const parsed = p.photos ? JSON.parse(p.photos) : [];
              if (Array.isArray(parsed)) allPhotos = allPhotos.concat(parsed);
            } catch (e) {
              if (Array.isArray(p.photos)) allPhotos = allPhotos.concat(p.photos);
            }
          });
        }

        const firstPhoto = allPhotos.length > 0 ? `${BASE_URL_MEDIA}${allPhotos[0]}` : null;
        const firstPhotoObj = Array.isArray(c.photos) && c.photos[0] ? c.photos[0] : null;

        return {
          id: c.id,
          title: (firstPhotoObj && firstPhotoObj.feature_title) || c.title || 'Collection',
          description: (firstPhotoObj && firstPhotoObj.description) || '',
          image: firstPhoto, // may be null if no photos
          photoCount: allPhotos.length
        };
      });
  })();

  const filteredImages = activeFilter === 'All Photos'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* render hero background only if API provides it (no static fallback) */}
        {hero?.[0]?.back_image && (
          <Image
            src={`${BASE_URL_MEDIA}${hero[0].back_image}`}
            alt={hero[0].title || 'Gallery Background'}
            fill
            priority
            unoptimized
            className="absolute inset-0 object-cover object-center opacity-60"
          />
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              {hero?.[0]?.title || 'Photo Gallery'}
            </h1>
            <p className="text-xl text-white/90">
              {hero?.[0]?.sub_text || `Explore life at Academy School through our collection of photos showcasing our 
            vibrant community, activities, arts, and special events.`}
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
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
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
                {/* render image only if API provided one (no static fallback) */}
                {collection.image && (
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{collection.title}</h3>
                  <p className="text-gray-600 mb-4">{collection.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{collection.photoCount} photos</span>
                    <Link href={`/gallery/album/${collection.id}`}>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  View Album →
                </button>
              </Link>
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
                {/* removed static placeholder image per request */}
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
