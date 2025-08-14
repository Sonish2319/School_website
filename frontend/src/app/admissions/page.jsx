'use client';
// components/AdmissionsPage.js
import Image from 'next/image';
import Link from 'next/link';
import { useFetchData } from '../../store/hooks/useFetchData';

const BASE_URL_MEDIA = 'http://localhost:9000';

const AdmissionsPage = () => {


  const { data: hero, error: heroError, loading: heroLoading } = useFetchData('/api/admission/hero');
  const { data: applicationProcess, error: appError, loading: appLoading } = useFetchData('/api/admission/applicationProcess');
  const { data: contact, error: cError, loading: cvLoading } = useFetchData('/api/admission/contact');
  const { data: faq, error: fError, loading: fLoading } = useFetchData('/api/admission/faq');
  const { data: requirement, error: rError, loading: rLoading } = useFetchData('/api/admission/requirement');
  const { data: director, error: dError, loading: dLoading } = useFetchData('/api/admission/director');
  const { data: timeline, error: tError, loading: tLoading } = useFetchData('/api/admission/timeline');



  // Combine loading and error states
  const isLoading = heroLoading || appLoading || cvLoading || fLoading || rLoading || dLoading || tLoading;
  const error = heroError || appError || cError || fError || rError || dError || tError;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const path = `${BASE_URL_MEDIA}${hero[0].background_image}`;
  console.log('path', path);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="relative h-96 bg-cover bg-center" 
               style={{backgroundImage: "url('/classroom-bg.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Admissions</h1>
            <p className="text-xl">Join our academic community</p>
          </div>
        </div>
        

        <div className="absolute bottom-8 left-8 z-20">
          <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            Apply Now
          </button>
        </div>
      </section> */}


      {hero?.[0]?.background_image && (
  <section className="relative h-96">
    <Image
      src={`${BASE_URL_MEDIA}${hero[0].background_image}`}
      alt={hero[0].title || 'Admissions'}
      fill
      priority
      unoptimized
      className="object-cover"
    />
    <div className="absolute inset-0 bg-opacity-40"></div>
    <div className="relative z-10 flex items-center justify-center h-full">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">{hero[0].title || 'Admissions'}</h1>
        <p className="text-xl">{hero[0].subtitle || 'Join our academic community'}</p>
      </div>
    </div>

    {/* Apply Now Button positioned over hero */}
    <div className="absolute bottom-8 left-8 z-20">
    <Link href={`https://${hero[0].button_link || '#'}`} target='_blank' passHref>
        <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
          {hero[0].button_text || 'Apply Now'}
        </button>
      </Link>
    </div>
  </section>
)}


      {/* Welcome from Director Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Welcome from the Director of Admissions
            </h2>
            
            <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
              <Image
                src={`${BASE_URL_MEDIA}${director[0].director_image}`}
                alt={director[0].title || 'Default name'}
                width={96}
                height={96}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>            
            <p className="text-sm text-gray-600 mb-4">{director[0].director_name}, {director[0].title}</p>
            
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                {director[0].content}
              </p>
              
              <p>
                We invite you to explore our website, schedule a campus visit, and connect with any questions. We look 
                forward to getting to know your family during the admissions process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
      <p className="text-gray-600">Follow these steps to apply to Academy School</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {applicationProcess?.map((step) => (
        <div key={step.id} className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className={`${step.icon} w-10 h-10 text-blue-600`}></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
          <p className="text-sm text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
        Start Your Application
      </button>
    </div>
  </div>
</section>


      {/* Admissions Timeline Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Admissions Timeline</h2>
      <p className="text-gray-600">Key dates for the 2024-2025 admissions cycle</p>
    </div>

    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Table Header */}
      <div className="bg-blue-600 text-white px-6 py-4">
        <h3 className="text-lg font-semibold">Important Dates</h3>
      </div>

      {/* Table Content */}
      <div className="divide-y divide-gray-200">
        {timeline?.map((event, index) => (
          <div
            key={event.id}
            className={`flex justify-between items-center px-6 py-4 ${index % 2 === 0 ? '' : 'bg-gray-50'}`}
          >
            <div className="font-medium text-gray-900">{event.date}</div>
            <div className="text-gray-600">{event.event}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
      {/* Admission Requirements and FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Admission Requirements */}
            <div>
  <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
  <p className="text-gray-600 mb-8">The following documents are required to complete your application:</p>

  <div className="space-y-4">
    {requirement?.map((requirements, index) => (
      <div key={requirements.id} className="flex items-start space-x-3">
        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
        </div>
        <span className="text-gray-700">{requirements.requirement_text}</span>
      </div>
    ))}
  </div>
</div>


            {/* Frequently Asked Questions */}
            <div>
  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
  
  <div className="space-y-6">
    {faq?.map((faqs) => (
      <div key={faqs.id}>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faqs.question}</h3>
        <p className="text-gray-600 text-sm">{faqs.answer}</p>
      </div>
    ))}
  </div>
</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Know More?</h2>
          <p className="text-xl mb-8">
            Experience Academy School firsthand. Schedule a tour to meet our faculty and see our facilities.
          </p>
          <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            Apply Now
          </button>
        </div>
      </section>

      {/* Contact Admissions Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Admissions</h2>
      <p className="text-gray-600">Our admissions team is here to help. Contact us with any questions about the application process.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {contact?.map((item) => (
        <div key={item.id} className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className={`w-8 h-8 text-blue-600 ${item.icon}`}></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.contact_type}</h3>
          <p className="text-gray-600 text-sm">{item.line1}</p>
          <p className="text-gray-600 text-sm">{item.line2}</p>
          <p className="text-gray-600 text-sm">{item.line3}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Newsletter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to receive the latest news, events, and updates from Academy School.
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;