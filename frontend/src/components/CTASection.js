'use client';
import { useFetchData } from '../store/hooks/useFetchData';
import Link from 'next/link';



const CTASection = () => {

  const { data:CTA, error:CTAeRROR, loading:CTALoading } = useFetchData('/api/home/cta');

  const isLoading = CTALoading;
  const error = CTAeRROR;

  if( isLoading ) return <div>Loading .....</div>
  if( error ) return <div>Error: {error}</div>


    return (
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {CTA?.[0]?.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {CTA?.[0]?.sub_text}
          </p>
          <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium text-lg">
            Apply Now
          </button>
        </div>
      </section>
    );
  };
  
  export default CTASection;