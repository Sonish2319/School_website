// import React from 'react';

// const AboutPage = () => {
//   return (
//     <div className="w-full bg-white text-gray-800 py-12 px-4 md:px-10 lg:px-20">
//       <div className="max-w-5xl mx-auto">
//         {/* Heading */}
//         <div className="mb-10 text-center">
//           <h1 className="text-4xl font-bold mb-4">About Our School</h1>
//           <p className="text-lg text-gray-600">
//             Nurturing minds, shaping futures — one student at a time.
//           </p>
//         </div>

//         {/* Image & Description */}
//         <div className="flex flex-col lg:flex-row items-start gap-8 mb-14">
//           <div className="flex-1">
//             <img
//               src="/images/school-building.jpg"
//               alt="School Building"
//               className="rounded-lg shadow-md w-full h-auto object-cover"
//             />
//           </div>
//           <div className="flex-1 text-[16px] leading-relaxed text-justify text-gray-700">
//             <p className="mb-4">
//               Established in 2001, Sunrise International School is dedicated to providing a safe,
//               supportive, and challenging learning environment. We believe in academic excellence,
//               personal integrity, and lifelong learning.
//             </p>
//             <p>
//               Our campus offers modern classrooms, experienced faculty, and a diverse set of
//               extracurricular activities that nurture creativity and character in every student.
//             </p>
//           </div>
//         </div>

//         {/* Mission, Vision, Goal */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
//           <div className="bg-red-100 rounded-xl p-6 shadow-md">
//             <h3 className="text-xl font-semibold mb-2 text-red-700">Our Mission</h3>
//             <p className="text-gray-700">
//               To foster a love for learning and help students achieve their full potential in a
//               values-driven environment.
//             </p>
//           </div>
//           <div className="bg-green-100 rounded-xl p-6 shadow-md">
//             <h3 className="text-xl font-semibold mb-2 text-green-700">Our Vision</h3>
//             <p className="text-gray-700">
//               To become a leading educational institution that produces compassionate, responsible,
//               and globally aware citizens.
//             </p>
//           </div>
//           <div className="bg-blue-100 rounded-xl p-6 shadow-md">
//             <h3 className="text-xl font-semibold mb-2 text-blue-700">Our Goal</h3>
//             <p className="text-gray-700">
//               To provide holistic education that balances academics, values, sports, and the arts.
//             </p>
//           </div>
//         </div>

//         {/* Core Values */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
//           <ul className="list-disc list-inside text-gray-700 space-y-2">
//             <li>Integrity and Honesty</li>
//             <li>Respect for All</li>
//             <li>Commitment to Excellence</li>
//             <li>Empathy and Compassion</li>
//             <li>Responsibility and Leadership</li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div className="border-t pt-6 mt-10 text-center text-sm text-gray-600">
//           <p>📍 Location: Sunrise International School, Kathmandu, Nepal</p>
//           <p>📞 Phone: +977-1-1234567 | ✉️ Email: info@sunriseschool.edu.np</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;


// import React from 'react';
// import { Calendar, Users, Award, BookOpen, MapPin } from 'lucide-react';

// const AboutUs = () => {
//   const timelineEvents = [
//     {
//       year: "Jan 1981",
//       title: "School Founded",
//       description: "Vibhuti Vidhya Mandir School is renowned as pioneers and leaders in the field of education committed to educate and transform by inspiring.",
//       image: "/api/placeholder/300/200"
//     },
//     {
//       year: "Jan 1981",
//       title: "School Founded",
//       description: "Vibhuti Vidhya Mandir School is renowned as pioneers and leaders in the field of education committed to educate and transform by inspiring.",
//       image: "/api/placeholder/300/200"
//     },
//     {
//       year: "Jan 1981",
//       title: "School Founded",
//       description: "Vibhuti Vidhya Mandir School is renowned as pioneers and leaders in the field of education committed to educate and transform by inspiring.",
//       image: "/api/placeholder/300/200"
//     },
//     {
//       year: "Jan 1981",
//       title: "School Founded",
//       description: "Vibhuti Vidhya Mandir School is renowned as pioneers and leaders in the field of education committed to educate and transform by inspiring.",
//       image: "/api/placeholder/300/200"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">

//       {/* Hero Section */}
//       <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">A Closer Look at Our Journey</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Vibhuti Vidhya Mandir School is renowned as pioneers and leaders in the field of education 
//               committed to educate and transform by inspiring.
//             </p>
//           </div>

//           {/* Image Gallery */}
//           <div className="grid md:grid-cols-2 gap-8 mb-16">
//             <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
//               <img 
//                 src="/api/placeholder/500/300" 
//                 alt="School Building" 
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute top-4 left-4">
//                 <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
//                   <span className="text-white text-xs font-bold">V</span>
//                 </div>
//               </div>
//             </div>
//             <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
//               <img 
//                 src="/api/placeholder/500/300" 
//                 alt="School Campus" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Principal's Message */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
//                 "We believe in the value of knowledge, the power of teaching and research, and the ways that what we do here can benefit society."
//               </blockquote>
//               <div className="border-l-4 border-red-600 pl-6">
//                 <p className="font-semibold text-gray-900">Principal of Vibhuti Vidhya Mandir</p>
//                 <p className="text-gray-600">Ram Bahadur Yadav</p>
//               </div>
//             </div>
//             <div className="relative">
//               <img 
//                 src="/api/placeholder/400/500" 
//                 alt="Principal Ram Bahadur Yadav" 
//                 className="w-full h-96 object-cover rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Journey Through Time</h3>
//             <p className="text-lg text-gray-600">Milestones that shaped our educational excellence</p>
//           </div>

//           <div className="space-y-12">
//             {timelineEvents.map((event, index) => (
//               <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
//                 <div className="lg:w-1/2">
//                   <div className="relative">
//                     <img 
//                       src={event.image} 
//                       alt={event.title}
//                       className="w-full h-64 object-cover rounded-lg shadow-lg"
//                     />
//                   </div>
//                 </div>
//                 <div className="lg:w-1/2 text-center lg:text-left">
//                   <div className="inline-flex items-center gap-2 mb-4">
//                     <Calendar className="w-5 h-5 text-red-600" />
//                     <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
//                       {event.year}
//                     </span>
//                   </div>
//                   <h4 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h4>
//                   <p className="text-gray-600 text-lg leading-relaxed">{event.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8 text-center text-white">
//             <div>
//               <div className="flex justify-center mb-4">
//                 <Users className="w-12 h-12" />
//               </div>
//               <div className="text-4xl font-bold mb-2">500+</div>
//               <div className="text-red-100">Students</div>
//             </div>
//             <div>
//               <div className="flex justify-center mb-4">
//                 <BookOpen className="w-12 h-12" />
//               </div>
//               <div className="text-4xl font-bold mb-2">50+</div>
//               <div className="text-red-100">Teachers</div>
//             </div>
//             <div>
//               <div className="flex justify-center mb-4">
//                 <Award className="w-12 h-12" />
//               </div>
//               <div className="text-4xl font-bold mb-2">43+</div>
//               <div className="text-red-100">Years of Excellence</div>
//             </div>
//             <div>
//               <div className="flex justify-center mb-4">
//                 <MapPin className="w-12 h-12" />
//               </div>
//               <div className="text-4xl font-bold mb-2">1</div>
//               <div className="text-red-100">Campus</div>
//             </div>
//           </div>
//         </div>
//       </section>


//     </div>
//   );
// };

// export default AboutUs;


// components/AboutAcademy.js
import Image from 'next/image';
import Link from 'next/link';

const AboutAcademy = () => {
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
                <Link href="/about" className="text-orange-400 font-medium">About Us</Link>
                <Link href="/admissions" className="hover:text-blue-200">Admissions</Link>
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
               style={{backgroundImage: "url('school.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-white">About Academy School</h1>
        </div>
      </section>

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

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ACADEMY SCHOOL</h3>
              <p className="text-sm text-blue-200">
                Empowering students and inspiring the future leaders since 1985.
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
                <li><Link href="/library" className="text-blue-200 hover:text-white">Library</Link></li>
                <li><Link href="/parent-portal" className="text-blue-200 hover:text-white">Parent Portal</Link></li>
                <li><Link href="/student-portal" className="text-blue-200 hover:text-white">Student Portal</Link></li>
                <li><Link href="/calendar" className="text-blue-200 hover:text-white">Academic Calendar</Link></li>
                <li><Link href="/faq" className="text-blue-200 hover:text-white">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Contact Us</h4>
              <div className="text-sm text-blue-200 space-y-2">
                <p>123 Education Drive, Academy City</p>
                <p>NY 12345</p>
                <p>(555) 123-4567</p>
                <p>info@academyschool.edu</p>
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
      </footer>
    </div>
  );
};

export default AboutAcademy;