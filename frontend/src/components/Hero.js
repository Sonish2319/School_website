'use client';
import Image from 'next/image';
import { useFetchData } from '../store/hooks/useFetchData';
import Link from 'next/link';

const BASE_URL_MEDIA = 'http://localhost:9000';



const HeroSection = () => {

  const { data: heroData, error: heroError, loading: heroLoading } = useFetchData('/api/home/image');
  const { data: welcome, error: wError, loading: wLoading } = useFetchData('/api/home/hero');


  const isLoading = heroLoading || wLoading; ;
  const error = heroError || wError;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  

  return (
    <section className="bg-gradient-to-r from-blue-50 to-cyan-50">
      {/* Banner */}
      <div className="relative w-full h-[450px] md:h-[550px]">
        <Image
          src={`${BASE_URL_MEDIA}${heroData[0].image}`}
          alt="Vibhuti Vidhya Mandir School Building"
          fill
          priority
          unoptimized
          className="object-cover"
        />
      </div>

      {/* Content Below Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Heading, Paragraph, Button */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-red-600 mb-6">
              Welcome to Our Global <br /> Learning Community
            </h1>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              As an international school, we are dedicated to fostering a diverse, inclusive, 
              and globally aware environment where students from all backgrounds thrive. 
              Our commitment goes beyond academics — we nurture future leaders equipped 
              with the skills, values, and perspectives to succeed in a rapidly changing world.
            </p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium">
              Discover Our Vision
            </button>
          </div>

          {/* Right: Feature Grid (2x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {welcome?.map((feature) => (
            <Feature
              key={feature.id}
              title={feature.feature_title}
              description={feature.feature_description}
              icon={feature.feature_icon}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};
const Feature = ({ title, description, icon }) => (
  <div className="flex items-start space-x-4">
    <div className="text-3xl">
      <i className={icon}></i>
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default HeroSection;
