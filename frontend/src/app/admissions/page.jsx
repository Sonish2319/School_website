// export default function Admissions() {
//     return (
//       <div className="max-w-[1440px] mx-auto px-6 py-16">
//         <h1 className="text-3xl font-semibold text-[#D43535] mb-6">Admission Process</h1>
//         <p className="text-[#545454] mb-8">
//           We welcome new students with a simple and transparent admission process.
//         </p>
  
//         <ol className="list-decimal list-inside space-y-4 text-[#545454]">
//           <li>Fill the online or offline application form.</li>
//           <li>Submit required documents (birth certificate, passport photos, previous transcripts).</li>
//           <li>Attend interaction/entrance test (if applicable).</li>
//           <li>Receive confirmation and pay admission fees.</li>
//           <li>Begin orientation and class enrollment.</li>
//         </ol>
//       </div>
//     );
//   }
  

// components/AdmissionsPage.js
import Image from 'next/image';
import Link from 'next/link';

const AdmissionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      {/* <nav className="bg-blue-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold">ACADEMY</div>
              <div className="hidden md:flex space-x-6 text-sm">
                <Link href="/" className="hover:text-blue-200">Home</Link>
                <Link href="/about" className="hover:text-blue-200">About Us</Link>
                <Link href="/admissions" className="text-orange-400 font-medium">Admissions</Link>
                <Link href="/faculty" className="hover:text-blue-200">Faculty</Link>
                <Link href="/facilities" className="hover:text-blue-200">Facilities</Link>
                <Link href="/gallery" className="hover:text-blue-200">Gallery</Link>
                <Link href="/contact" className="hover:text-blue-200">Contact</Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <span>Parent Portal</span>
              <span>Student Portal</span>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" 
               style={{backgroundImage: "url('/classroom-bg.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Admissions</h1>
            <p className="text-xl">Join our academic community</p>
          </div>
        </div>
        
        {/* Apply Now Button positioned over hero */}
        <div className="absolute bottom-8 left-8 z-20">
          <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            Apply Now
          </button>
        </div>
      </section>

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
                  src="/director-sarah-chen.jpg"
                  alt="Dr. Sarah Chen, Director of Admissions"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">Dr. Sarah Chen, Director of Admissions</p>
            
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Thank you for your interest in Academy School. Our admissions process is designed to identify students 
                who will thrive in our challenging academic environment and contribute to our thriving community. We 
                look for students who demonstrate intellectual curiosity, strong character, and a commitment to excellence.
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
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1 - Submit Application</h3>
              <p className="text-sm text-gray-600">Complete our online application form with all required information.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2 - Provide Documents</h3>
              <p className="text-sm text-gray-600">Submit transcripts, recommendations, and other required documents.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 6v6m-7-6a7 7 0 1114 0v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3 - Schedule Assessment</h3>
              <p className="text-sm text-gray-600">Complete academic assessment and interview process.</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 4 - Await Decision</h3>
              <p className="text-sm text-gray-600">Receive admission decision after reviewing all materials.</p>
            </div>
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
              <div className="flex justify-between items-center px-6 py-4">
                <div className="font-medium text-gray-900">October 1</div>
                <div className="text-gray-600">Applications Open</div>
              </div>
              
              <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
                <div className="font-medium text-gray-900">December 15</div>
                <div className="text-gray-600">Early Decision Deadline</div>
              </div>
              
              <div className="flex justify-between items-center px-6 py-4">
                <div className="font-medium text-gray-900">January 15</div>
                <div className="text-gray-600">Regular Decision Deadline</div>
              </div>
              
              <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
                <div className="font-medium text-gray-900">February 28</div>
                <div className="text-gray-600">Final Decision Notification</div>
              </div>
              
              <div className="flex justify-between items-center px-6 py-4">
                <div className="font-medium text-gray-900">March 15</div>
                <div className="text-gray-600">Regular Decision Notification</div>
              </div>
              
              <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
                <div className="font-medium text-gray-900">April 30</div>
                <div className="text-gray-600">Enrollment Deadline</div>
              </div>
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
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Completed online application form</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">All non-returnable application fee</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Official transcripts from all schools attended the past three years</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Teacher recommendations (Math and English/Language Arts)</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Personal statement/essay</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">Student and parent interviews</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">SSAT or ISEE results (for grade 6 and above applications)</span>
                </div>
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the age requirements for admission?</h3>
                  <p className="text-gray-600 text-sm">Students must be 5 years old by September 1 for Kindergarten. For other grades, please contact our admissions office.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer financial aid?</h3>
                  <p className="text-gray-600 text-sm">Yes, Academy School offers need-based financial aid and merit scholarships. Financial aid applications are due with admission applications.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there an entrance exam?</h3>
                  <p className="text-gray-600 text-sm">We require standardized test scores for students applying to grades 6 and above. For younger students, we conduct informal assessment opportunities.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the average class size?</h3>
                  <p className="text-gray-600 text-sm">Our average class size is 15 students, with a maximum class size of 18, ensuring personalized attention for each student.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you accept mid-year transfers?</h3>
                  <p className="text-gray-600 text-sm">Yes, we do accept mid-year transfers based on availability. Please contact the admissions office to discuss availability.</p>
                </div>
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
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">(555) 123-4567</p>
              <p className="text-gray-600 text-sm">Monday - Friday</p>
              <p className="text-gray-600 text-sm">8:00 AM - 4:30 PM</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">admissions@academyschool.edu</p>
              <p className="text-gray-600 text-sm">We typically respond</p>
              <p className="text-gray-600 text-sm">within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600 text-sm">Admissions Office</p>
              <p className="text-gray-600 text-sm">123 Education Ave</p>
              <p className="text-gray-600 text-sm">Suite 100</p>
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

      {/* Footer */}
      {/* <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ACADEMY SCHOOL</h3>
              <p className="text-sm text-blue-200">
                Providing quality education and inspiring the future leaders since 1985.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-200 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-200 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/home" className="text-blue-200 hover:text-white">Home</Link></li>
                <li><Link href="/about" className="text-blue-200 hover:text-white">About Us</Link></li>
                <li><Link href="/admissions" className="text-blue-200 hover:text-white">Admissions</Link></li>
                <li><Link href="/academics" className="text-blue-200 hover:text-white">Academics</Link></li>
                <li><Link href="/contact" className="text-blue-200 hover:text-white">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/library" className="text-blue-200 hover:text-white">Parent Portal</Link></li>
                <li><Link href="/parent-portal" className="text-blue-200 hover:text-white">Student Portal</Link></li>
                <li><Link href="/student-portal" className="text-blue-200 hover:text-white">Academic Calendar</Link></li>
                <li><Link href="/calendar" className="text-blue-200 hover:text-white">Career Opportunities</Link></li>
                <li><Link href="/careers" className="text-blue-200 hover:text-white">Alumni Network</Link></li>
                <li><Link href="/alumni" className="text-blue-200 hover:text-white">Library</Link></li>
                <li><Link href="/faq" className="text-blue-200 hover:text-white">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Contact Us</h4>
              <div className="text-sm text-blue-200 space-y-2">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>123 Education Drive, Academy City</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>NY 12345</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span>info@academyschool.edu</span>
                </div>
                <div className="mt-4">
                  <p className="font-medium">School Hours:</p>
                  <p>Monday - Friday: 8:00 AM - 4:30 PM</p>
                  <p>Saturday: 9:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
              <p>© 2023 Academy School. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default AdmissionsPage;