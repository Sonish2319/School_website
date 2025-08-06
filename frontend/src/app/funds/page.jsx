// export default function Funds() {
//     return (
//       <div className="max-w-[1440px] mx-auto px-6 py-16">
//         <h1 className="text-3xl font-semibold text-[#D43535] mb-6">Fund Management</h1>
//         <p className="text-[#545454] mb-4">
//           Our school maintains transparency in financial operations to ensure accountability and trust.
//         </p>
  
//         <ul className="list-disc list-inside text-[#545454] space-y-2">
//           <li>Scholarship funds for underprivileged students</li>
//           <li>Infrastructure development and classroom upgrades</li>
//           <li>Library and laboratory expansions</li>
//           <li>Sports and extracurricular support</li>
//           <li>Annual fund audit reports available to public</li>
//         </ul>
//       </div>
//     );
//   }
  

// components/FundingPage.js
import Image from 'next/image';
import Link from 'next/link';

const FundingPage = () => {
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
                <Link href="/admissions" className="hover:text-blue-200">Admissions</Link>
                <Link href="/funding" className="text-orange-400 font-medium">Funding</Link>
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
               style={{backgroundImage: "url('/calculator-bg.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Funding Options</h1>
            <p className="text-xl">Making quality education affordable and accessible</p>
          </div>
        </div>
        
        {/* Apply for Financial Aid Button */}
        <div className="absolute bottom-8 left-8 z-20">
          <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
            Apply for Financial Aid
          </button>
        </div>
      </section>

      {/* Our Commitment to Accessibility Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Commitment to Accessibility
          </h2>
          
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="mb-6">
              At Academy School, we believe that financial circumstances should not be a barrier to exceptional 
              education opportunities. We are committed to making our transformative educational experiences and 
              world-class facilities accessible to families from all economic backgrounds through our comprehensive 
              financial aid program.
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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            {/* Table Header */}
            <div className="bg-blue-600 text-white px-6 py-4">
              <h3 className="text-lg font-semibold">Annual Tuition</h3>
            </div>

            {/* Table Content */}
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
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1</h3>
              <h4 className="font-medium text-blue-600 mb-2">Submit Application</h4>
              <p className="text-sm text-gray-600">
                Complete and submit the online financial aid application through our secure portal.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2</h3>
              <h4 className="font-medium text-blue-600 mb-2">Provide Documentation</h4>
              <p className="text-sm text-gray-600">
                Submit required tax returns, W-2s, and other financial documents for review.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3</h3>
              <h4 className="font-medium text-blue-600 mb-2">Review Process</h4>
              <p className="text-sm text-gray-600">
                Our financial aid committee will review your application and supporting documents.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 4</h3>
              <h4 className="font-medium text-blue-600 mb-2">Receive Decision</h4>
              <p className="text-sm text-gray-600">
                Financial aid decisions will be communicated along with admission decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Important Dates</h2>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">November 1</h3>
                <p className="text-gray-600">Priority Financial Aid Application Deadline</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">January 15</h3>
                <p className="text-gray-600">Final Financial Aid Application Deadline</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">March 15</h3>
                <p className="text-gray-600">Financial Aid Decisions Released</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">April 30</h3>
                <p className="text-gray-600">Financial Aid Response Due</p>
              </div>
            </div>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Merit Scholarships</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Academy School offers merit-based scholarships to recognize outstanding academic achievement, leadership 
            potential, and exceptional talents in arts, athletics, and community service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Academic Excellence Scholarship */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Excellence Scholarship</h3>
              <p className="text-gray-600 text-sm mb-4">
                Awarded to students demonstrating exceptional academic performance and intellectual curiosity.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Up to 50% off tuition</li>
                <li>• Renewable annually</li>
                <li>• GPA requirement: 3.8+</li>
              </ul>
            </div>

            {/* Leadership Scholarship */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Leadership Scholarship</h3>
              <p className="text-gray-600 text-sm mb-4">
                Recognizes students who have demonstrated outstanding leadership potential in school and community.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Up to 25% off tuition</li>
                <li>• Leadership program participation</li>
                <li>• Community service requirement</li>
              </ul>
            </div>

            {/* Arts Excellence */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Arts Excellence</h3>
              <p className="text-gray-600 text-sm mb-4">
                Celebrates students with exceptional talent and dedication in visual arts, music, or performing arts.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Up to 30% off tuition</li>
                <li>• Portfolio/audition required</li>
                <li>• Arts program participation</li>
              </ul>
            </div>
          </div>

          {/* Additional Scholarships */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Athletic Scholarship */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Athletic Scholarship</h3>
              <p className="text-gray-600 text-sm mb-4">
                Awarded to student-athletes who demonstrate exceptional athletic ability and sportsmanship.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Up to 25% off tuition</li>
                <li>• Athletic participation required</li>
                <li>• Academic standards maintained</li>
              </ul>
            </div>

            {/* Legacy Scholarship */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legacy Scholarship</h3>
              <p className="text-gray-600 text-sm mb-4">
                Available to children and grandchildren of Academy School alumni who meet academic requirements.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Up to 15% off tuition</li>
                <li>• Alumni family connection</li>
                <li>• Academic merit considered</li>
              </ul>
            </div>
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
            {/* Annual Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Annual Plan</h3>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Full payment due July 1</li>
                  <li>• 3% discount on tuition</li>
                  <li>• No processing fees</li>
                </ul>
                <div className="bg-green-50 p-3 rounded-lg">
                  <span className="text-green-700 font-semibold">Save 3%</span>
                </div>
              </div>
            </div>

            {/* Semester Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-500">
              <div className="text-center">
                <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Semester Plan</h3>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Payment due July 1 & January 1</li>
                  <li>• 1% discount on tuition</li>
                  <li>• Minimal processing fees</li>
                </ul>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <span className="text-blue-700 font-semibold">Save 1%</span>
                </div>
              </div>
            </div>

            {/* Monthly Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Monthly Plan</h3>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• 12 monthly payments</li>
                  <li>• Automatic bank draft</li>
                  <li>• $50 annual processing fee</li>
                </ul>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <span className="text-orange-700 font-semibold">Maximum Flexibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How is financial need determined?</h3>
              <p className="text-gray-600">
                Financial need is determined using the School and Student Service (SSS) needs analysis, which takes into account 
                family income, assets, size, and other relevant financial factors. We review each family's complete financial 
                picture to determine the appropriate level of assistance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I apply for both financial aid and scholarships?</h3>
              <p className="text-gray-600">
                Yes, families can apply for both need-based financial aid and merit-based scholarships. However, the total assistance 
                cannot exceed the full cost of tuition and fees. Merit scholarships are applied first, and need-based aid may supplement 
                to meet demonstrated need.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Is financial aid renewable each year?</h3>
              <p className="text-gray-600">
                Financial aid awards are reviewed annually and are renewable based on continued demonstrated need and satisfactory 
                academic progress. Families must reapply each year by submitting updated financial information by the deadline.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Are payment plans available?</h3>
              <p className="text-gray-600">
                Yes, we offer flexible payment plans including annual, semester, and monthly options. Each plan has different benefits 
                and processing fees. Contact our business office to determine which plan works best for your family.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What will affect financial aid decisions?</h3>
              <p className="text-gray-600">
                Financial aid decisions are based on demonstrated financial need, availability of funds, and the timing of your application. 
                Priority is given to families who apply by the early deadline. Changes in family financial circumstances may also affect aid eligibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Questions About Funding CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Questions About Funding?</h2>
              <p className="text-xl mb-8">
                We're here to support and help you navigate our financial aid process. 
                Connect with our team for personalized assistance.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <span>Call (555) 123-4567</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <span>Email financial.aid@academyschool.edu</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span>Schedule a consultation</span>
                </div>
              </div>
              
              <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Contact Financial Aid Office
              </button>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-white bg-opacity-10 p-8 rounded-lg">
                <Image
                  src="/financial-consultation.jpg"
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
                <li><Link href="/parent-portal" className="text-blue-200 hover:text-white">Parent Portal</Link></li>
                <li><Link href="/student-portal" className="text-blue-200 hover:text-white">Student Portal</Link></li>
                <li><Link href="/calendar" className="text-blue-200 hover:text-white">Academic Calendar</Link></li>
                <li><Link href="/careers" className="text-blue-200 hover:text-white">Career Opportunities</Link></li>
                <li><Link href="/alumni" className="text-blue-200 hover:text-white">Alumni Network</Link></li>
                <li><Link href="/library" className="text-blue-200 hover:text-white">Library</Link></li>
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

export default FundingPage;