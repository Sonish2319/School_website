// 'use client';


// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const BASE_URL  = 'http://localhost:9000'
// const AboutAcademy = () => {
//   console.log('AboutAcademy component rendered');

//   const [historyData, setHistoryData] = useState([]);
//   const [statisticsData, setStatisticsData] = useState([]);
//   const [leadershipData, setLeadershipData] = useState([]);
//   const [newsletterData, setNewsletterData] = useState(null);
//   const [heroData, setHeroData] = useState(null);
//   const [missionVision, setMissionVision] = useState(null);
//   const [coreValues, setCoreValues] = useState(null);


//   // Loading state
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     console.log('useEffect triggered');
//     const fetchData = async () => {
//       try {
//         const heroResponse = await fetch(`${BASE_URL}/api/aboutus/hero`);
//         const missionVisionResponse = await fetch(`${BASE_URL}/api/aboutus/mission-vision`);
//         const coreValuesResponse = await fetch(`${BASE_URL}/api/aboutus/core-values`);
//         const historyResponse = await fetch(`${BASE_URL}/api/aboutus/history`);
//         const statisticsResponse = await fetch(`${BASE_URL}/api/aboutus/statistics`);
//         const leadershipResponse = await fetch(`${BASE_URL}/api/aboutus/leadership`);
//         const newsletterResponse = await fetch(`${BASE_URL}/api/aboutus/newsletter`);

//         const hero = await heroResponse.json();
//         const missionVision = await missionVisionResponse.json();
//         const coreValues = await coreValuesResponse.json();
//         const history = await historyResponse.json();
//         const statistics = await statisticsResponse.json();
//         const leadership = await leadershipResponse.json();
//         const newsletter = await newsletterResponse.json();

//         setHeroData(hero);
//         setMissionVision(missionVision);
//         setCoreValues(coreValues);
//         setHistoryData(history);
//         setStatisticsData(statistics);
//         setLeadershipData(leadership);
//         setNewsletterData(newsletter);

//         setIsLoading(false); // Data is loaded
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Display loading state
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }


'use client';

import { useFetchData } from '../../store/hooks/useFetchData';
import Image from 'next/image';
import Link from 'next/link';

const AboutAcademy = () => {
  // Fetch all data using the hook
  const { data: heroData, error: heroError, loading: heroLoading } = useFetchData('/api/aboutus/hero');
  const { data: missionVision, error: mvError, loading: mvLoading } = useFetchData('/api/aboutus/mission-vision');
  const { data: coreValues, error: cvError, loading: cvLoading } = useFetchData('/api/aboutus/core-values');
  const { data: historyData, error: hError, loading: hLoading } = useFetchData('/api/aboutus/history');
  const { data: statisticsData, error: sError, loading: sLoading } = useFetchData('/api/aboutus/statistics');
  const { data: leadershipData, error: lError, loading: lLoading } = useFetchData('/api/aboutus/leadership');
  const { data: newsletterData, error: nError, loading: nLoading } = useFetchData('/api/aboutus/newsletter');

  // Combine loading and error states
  const isLoading = heroLoading || mvLoading || cvLoading || hLoading || sLoading || lLoading || nLoading;
  const error = heroError || mvError || cvError || hError || sError || lError || nError;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;




  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="relative h-96 bg-cover bg-center" 
               style={{backgroundImage: "url('school.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-white">About Academy School</h1>
        </div>
      </section> */}

      {/* Hero Section */}
{/* Hero Section */}
{/* Hero Section */}
{heroData?.[0]?.background_image && (
  <section className="relative h-96">
  <Image
  src={`http://localhost:9000${heroData[0].background_image}`}
  alt={heroData[0].title || 'About Academy School'}
  fill
  priority
  unoptimized
  className="object-cover"
/>
    <div className="absolute inset-0 bg-opacity-30"></div>
    <div className="relative z-10 flex items-center justify-center h-full">
      <h1 className="text-5xl font-bold text-white">
        {heroData[0].title || 'About Academy School'}
      </h1>
    </div>
  </section>
)}
      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Mission & Vision</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Mission */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide a transformative educational experience that nurtures 
                intellectual curiosity, fosters personal growth, and empowers students to 
                make positive contributions to society.
              </p>
            </div>

            {/* Our Vision */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be a leading educational institution that inspires excellence, cultivates 
                character and prepares students to thrive in a rapidly changing global 
                community.
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Community</h4>
              <p className="text-sm text-gray-600">
                Building a supportive and inclusive environment for all members of our school family.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-sm text-gray-600">
                Striving for the highest standards in academics and character.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-sm text-gray-600">
                Embracing new ideas and technologies to enhance learning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h4>
              <p className="text-sm text-gray-600">
                Upholding honesty, respect, and ethical behavior in all endeavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our History</h2>
            <p className="text-gray-600">A tradition of excellence spanning over three decades.</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">1985</h3>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Foundation</h4>
                  <p className="text-gray-600">
                    Academy School was founded by Mr. Robert Anderson with a vision to 
                    create an educational institution focused on academic excellence and 
                    character development.
                  </p>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">1995</h3>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Campus Expansion</h4>
                  <p className="text-gray-600">
                    The school expanded its campus to accommodate growing 
                    enrollment and added new facilities including a state-of-the-art 
                    library, science labs, and athletic facilities.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">2005</h3>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Curriculum Innovation</h4>
                  <p className="text-gray-600">
                    Academy School introduced an innovative curriculum that integrated 
                    technology, project-based learning, and global perspectives to 
                    prepare students for the 21st century.
                  </p>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                <div className="flex-1 pl-8">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">2023</h3>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Today</h4>
                  <p className="text-gray-600">
                    Today, Academy School continues its tradition of excellence with a 
                    diverse student body, dedicated faculty, and a commitment to 
                    preparing students for success in college and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Academy School by the Numbers
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1985</div>
              <div className="text-sm text-gray-600">Founded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">85</div>
              <div className="text-sm text-gray-600">Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">14:1</div>
              <div className="text-sm text-gray-600">Student Teacher Ratio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">25 acres</div>
              <div className="text-sm text-gray-600">Campus Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">College Acceptance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600">Meet the dedicated professionals who guide our school's mission and vision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 overflow-hidden">
                <Image
                  src="/team-member-1.jpg"
                  alt="Dr. Jennifer Wilson"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Dr. Jennifer Wilson</h3>
              <p className="text-blue-600 text-sm mb-2">Principal</p>
              <p className="text-gray-600 text-sm">
                Dr. Wilson brings over 20 years of educational leadership experience, dedicated to fostering academic excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 overflow-hidden">
                <Image
                  src="/team-member-2.jpg"
                  alt="Michael Thompson"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Michael Thompson</h3>
              <p className="text-blue-600 text-sm mb-2">Vice Principal</p>
              <p className="text-gray-600 text-sm">
                With a focus on student development and innovative teaching methods, Michael leads our curriculum and student support programs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 overflow-hidden">
                <Image
                  src="/team-member-3.jpg"
                  alt="Dr. Sarah Chen"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Dr. Sarah Chen</h3>
              <p className="text-blue-600 text-sm mb-2">Director of Admissions</p>
              <p className="text-gray-600 text-sm">
                Dr. Chen oversees our admissions process, ensuring we welcome students who will thrive in our academic community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 overflow-hidden">
                <Image
                  src="/team-member-4.jpg"
                  alt="Robert Johnson"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Robert Johnson</h3>
              <p className="text-blue-600 text-sm mb-2">Athletic Director</p>
              <p className="text-gray-600 text-sm">
                Robert leads our athletics programs and oversees our extensive sports facilities, promoting teamwork, leadership, and physical wellness.
              </p>
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

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-100">
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
          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutAcademy;