"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useFetchData } from '../../store/hooks/useFetchData';
const BASE_URL_MEDIA = 'http://localhost:9000';


const FundingPage = () => {

  const { data: hero, error: heroError, loading: heroLoading } = useFetchData('/api/fund/hero');
  const { data: commitment, error: commError, loading: commLoading } = useFetchData('/api/fund/commitment');
  const { data: finance, error: fiError, loading: fivLoading } = useFetchData('/api/fund/finance');
  const { data: faq, error: faError, loading: faLoading } = useFetchData('/api/fund/faq');
  const { data: cta, error: cError, loading: cLoading } = useFetchData('/api/fund/cta');
  const { data: imp, error: impError, loading: impLoading } = useFetchData('/api/fund/imp');
  const { data: merit, error: merError, loading: merLoading } = useFetchData('/api/fund/merit');
  const { data: payment, error: payError, loading: payLoading } = useFetchData('/api/fund/payment');
  const { data: tutionfee, error: tutError, loading: tutLoading } = useFetchData('/api/fund/tutionfee');


  const isLoading = heroLoading || commLoading || fivLoading || faLoading || cLoading || impLoading || merLoading || payLoading || tutLoading;
  const error = heroError || commError || fiError || faError || cError || impError || merError || payError || tutError;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  const { title, subtitle, background_image, button_text, button_link } = hero[0];


  const path = `${BASE_URL_MEDIA}${hero[0].background_image}`;
  const qrimage = `${BASE_URL_MEDIA}${cta?.[0]?.qrimage}`;
  
  console.log('path', path);


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="relative h-96 bg-cover bg-center" 
               style={{backgroundImage: "url('/calculator-bg.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Funding Options</h1>
            <p className="text-xl">Making quality education affordable and accessible</p>
          </div>
        </div>
        

        <div className="absolute bottom-8 left-8 z-20">
          <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            Apply for Financial Aid
          </button>
        </div>
      </section> */}

      <section className="relative h-96">
        {/* Background image */}
        {background_image && (
          <Image
            src={path}
            alt={title || 'Funding Options'}
            fill
            priority
            unoptimized
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-opacity-40"></div>

        {/* Text */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{title || 'Funding Options'}</h1>
            <p className="text-xl">{subtitle || 'Making quality education affordable and accessible'}</p>
          </div>
        </div>

        {/* Button */}
        <div className="absolute bottom-8 left-8 z-20">
          <Link href={`https://${button_link || '#'}`} target="_blank" passHref>
            <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              {button_text || 'Apply for Financial Aid'}
            </button>
          </Link>
        </div>
      </section>

      {/* Our Commitment to Accessibility Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {commitment?.[0]?.title}
          </h2>
          
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="mb-6">
            {commitment?.[0]?.description}
            </p>
            
            <p className="mb-6">
              Each year, Academy School allocates over 25% of our total educational budget toward financial aid, 
              ensuring that money never stands in the way of a student's access to excellent education. We take pride 
              in our need-blind admissions process, which means that applying for financial aid never affects admission to 
              Academy School and Academy offers need-based financial assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Tuition & Fees Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tuition & Fees</h2>
            <p className="text-gray-600">2024 - 2025 • Academic Year</p>
          </div>

          {/* Tuition Table */}
          {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">

            <div className="bg-blue-600 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Annual Tuition</h3>
            </div>


            <div className="divide-y divide-gray-200">
              <div className="flex justify-between items-center px-6 py-4">
                <div className="font-medium text-gray-900">Lower School (K-5)</div>
                <div className="text-gray-900 font-semibold">$28,500</div>
              </div>
              
              <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
                <div className="font-medium text-gray-900">Middle School (6-8)</div>
                <div className="text-gray-900 font-semibold">$31,200</div>
              </div>
              
              <div className="flex justify-between items-center px-6 py-4">
                <div className="font-medium text-gray-900">Upper School (9-12)</div>
                <div className="text-gray-900 font-semibold">$34,800</div>
              </div>
            </div>
          </div> */}

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
  {/* Table Header */}
  <div className="bg-blue-600 text-white px-6 py-4">
    <h3 className="text-lg font-semibold">Annual Tuition</h3>
  </div>

  {/* Table Content */}
  <div className="divide-y divide-gray-200">
    {tutionfee?.map((item, index) => (
      <div
        key={item.id}
        className={`flex justify-between items-center px-6 py-4 ${
          index % 2 === 1 ? "bg-gray-50" : ""
        }`}
      >
        <div className="font-medium text-gray-900">{item.type}</div>
        <div className="text-gray-900 font-semibold">{item.date}</div>
      </div>
    ))}
  </div>
</div>


          {/* Additional Fees Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Additional Fees</h3>
            </div>

            <div className="divide-y divide-gray-200">
              <div className="flex justify-between items-center px-6 py-4">
                <div className="font-medium text-gray-900">Application Fee</div>
                <div className="text-gray-900 font-semibold">$75</div>
              </div>
              
              <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
                <div className="font-medium text-gray-900">Registration Fee</div>
                <div className="text-gray-900 font-semibold">$500</div>
              </div>
              
              <div className="flex justify-between items-center px-6 py-4">
                <div className="font-medium text-gray-900">Technology Fee</div>
                <div className="text-gray-900 font-semibold">$450</div>
              </div>
              
              <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
                <div className="font-medium text-gray-900">Activities & Athletics Fee</div>
                <div className="text-gray-900 font-semibold">$350</div>
              </div>
              
              <div className="flex justify-between items-center px-6 py-4">
                <div className="font-medium text-gray-900">Meals (Optional)</div>
                <div className="text-gray-900 font-semibold">$2,400</div>
              </div>
              
              <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
                <div className="font-medium text-gray-900">Extended Day Program (Optional)</div>
                <div className="text-gray-900 font-semibold">$3,200</div>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600 mt-4">
            *All fees listed above are non-refundable. Optional fees apply only when utilizing these programs.
          </div>
        </div>
      </section>

      {/* Financial Aid Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Aid</h2>
      <p className="text-gray-600">
        Academy School is committed to making our rigorous education available to deserving students regardless of 
        their family's financial circumstances.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {finance?.map((item) => (
        <div key={item.id} className="text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className={`${item.icon} w-8 h-8 text-blue-600`}></i>
          </div>

          {/* Step */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.step}</h3>

          {/* Line1 */}
          <h4 className="font-medium text-blue-600 mb-2">{item.line1}</h4>

          {/* Line2 */}
          <p className="text-sm text-gray-600">
            {item.line2}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Important Dates Section */}
      <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Important Dates
        </h2>

        <div className="space-y-6">
          {imp.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.date}
                </h3>
                <p className="text-gray-600">{item.sub_text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Apply for Financial Aid
          </button>
        </div>
      </div>
    </section>

      {/* Merit Scholarships Section */}
      <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Merit Scholarships
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Academy School offers merit-based scholarships to recognize outstanding
          academic achievement, leadership potential, and exceptional talents in
          arts, athletics, and community service.
        </p>

        {/* First grid (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {merit.slice(0, 3).map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className={`${item.icon} text-blue-600 text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {item.line1 && <li>• {item.line1}</li>}
                {item.line2 && <li>• {item.line2}</li>}
                {item.line3 && <li>• {item.line3}</li>}
              </ul>
            </div>
          ))}
        </div>

        {/* Second grid (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {merit.slice(3).map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className={`${item.icon} text-blue-600 text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {item.line1 && <li>• {item.line1}</li>}
                {item.line2 && <li>• {item.line2}</li>}
                {item.line3 && <li>• {item.line3}</li>}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Apply for Scholarships
          </button>
        </div>
      </div>
    </section>

      {/* Payment Plans Section */}
      <section className="py-16">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Plans</h2>
      <p className="text-gray-600">
        We offer flexible payment options to help families manage tuition and fees throughout the academic year.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {payment && payment.length === 3 && (() => {
        // Reorder to make 'poular' item in the center
        const popularIndex = payment.findIndex(p => p.poular !== null);
        const reordered = [...payment];
        if (popularIndex !== 1 && popularIndex !== -1) {
          const [popularItem] = reordered.splice(popularIndex, 1);
          reordered.splice(1, 0, popularItem);
        }

        return reordered.map((plan) => {
          const isAnnual = plan.title === "Annual Plan";
          const isSemester = plan.title === "Semester Plan";
          const isMonthly = plan.title === "Monthly Plan";

          const iconBg = isAnnual
            ? "bg-green-100"
            : isSemester
            ? "bg-blue-100"
            : "bg-orange-100";

          const iconText = isAnnual
            ? "text-green-600"
            : isSemester
            ? "text-blue-600"
            : "text-orange-600";

          const borderColor = isSemester
            ? "border-blue-500"
            : "border-gray-200";

          const badgeBg = isAnnual
            ? "bg-green-50"
            : isSemester
            ? "bg-blue-50"
            : "bg-orange-50";

          const badgeText = isAnnual
            ? "text-green-700"
            : isSemester
            ? "text-blue-700"
            : "text-orange-700";

          return (
            <div key={plan.id} className={`bg-white p-6 rounded-lg shadow-lg border-2 ${borderColor}`}>
              <div className="text-center">
                {plan.poular && (
                  <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    {plan.poular}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{plan.title}</h3>
                <div className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {/* Icon rendered dynamically from API */}
                  <i className={`w-6 h-6 text-xl ${iconText} ${plan.icon}`}></i>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• {plan.line1}</li>
                  <li>• {plan.line2}</li>
                  <li>• {plan.line3}</li>
                </ul>
                <div className={`${badgeBg} p-3 rounded-lg`}>
                  <span className={`${badgeText} font-semibold`}>{plan.buttonText}</span>
                </div>
              </div>
            </div>
          );
        });
      })()}
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">
          {faq.map((faqs) => (
            <div key={faqs.id}>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {faqs.question}
              </h3>
              <p className="text-gray-600">{faqs.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Questions About Funding CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">{cta?.[0]?.sub_text}</h2>
            <p className="text-xl mb-8">{cta?.[0]?.title}</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <span>{cta?.[0]?.line1}</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <span>{cta?.[0]?.line2}</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span>{cta?.[0]?.line3}</span>
              </div>
            </div>

            <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              {cta?.[0]?.buttonText}
            </button>
          </div>

          <div className="hidden lg:block">
            <div className="bg-opacity-10 p-8 rounded-lg">
              <Image
                src={qrimage}
                alt="Financial consultation meeting"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
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

export default FundingPage;