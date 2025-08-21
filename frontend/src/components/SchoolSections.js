'use client';
import Image from 'next/image';
import { useFetchData } from '../store/hooks/useFetchData';
import Link from 'next/link';

const BASE_URL_MEDIA = 'http://localhost:9000';
const DEFAULT_IMAGE = '/default-school.jpg'; // fallback image

const SchoolSections = () => {
  const { data: schoolData, error: heroError, loading: heroLoading } = useFetchData('/api/home/homeschool');

  const isLoading = heroLoading;
  const error = heroError;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our School Sections</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From early childhood to secondary education, we provide comprehensive learning experiences 
            tailored to each developmental stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schoolData?.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src={section.image ? `${BASE_URL_MEDIA}${section.image}` : DEFAULT_IMAGE}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{section.subtitle}</h3>
                  <p className="text-sm opacity-90">{section.title}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{section.description}</p>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolSections;
