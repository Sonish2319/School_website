// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPhone,
//   faEnvelope,
//   faMapMarkerAlt,
//   faBuilding,
// } from "@fortawesome/free-solid-svg-icons";

// const ContactPage = () => {
//   return (
//     <section className="text-white px-4 rounded-lg mt-10 w-full max-w-[1440px] mx-auto">
//       <div className="mb-[30px]">
//         <button className="px-4 py-3 bg-[#D43535] text-white text-sm font-semibold rounded">Contact Us</button>
//       </div>

//       <div className="bg-gradient-to-r from-red-500 to-red-700 p-6 rounded-[20px]">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left: Info & Map */}
//           <div className="md:w-1/2">
//             <div className="rounded-xl overflow-hidden mb-6">
//               <iframe
//                 title="School Location"
//                 src="https://maps.google.com/maps?q=Kathmandu,%20Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
//                 width="100%"
//                 height="300"
//                 allowFullScreen=""
//                 loading="lazy"
//                 className="border-0 w-full h-[300px]"
//               ></iframe>
//             </div>
//             <ul className="space-y-3 text-[16px]">
//               <li className="flex items-center gap-2">
//                 <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
//                 Dilibazaar, Kathmandu, Nepal
//               </li>
//               <li className="flex items-center gap-2">
//                 <FontAwesomeIcon icon={faEnvelope} className="text-white" />
//                 <a href="mailto:info@school.edu.np">info@school.edu.np</a>
//               </li>
//               <li className="flex items-center gap-2">
//                 <FontAwesomeIcon icon={faPhone} className="text-white" />
//                 <a href="tel:+977123456789">+977 123456789</a>
//               </li>
//               <li className="flex items-center gap-2">
//                 <FontAwesomeIcon icon={faBuilding} className="text-white" />
//                 P85H+22 Kathmandu
//               </li>
//             </ul>
//           </div>

//           {/* Right: Contact Form */}
//           <div className="md:w-1/2 bg-[#F9FAFB] text-gray-900 p-6 rounded-lg">
//             <form className="space-y-4">
//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="flex-1">
//                   <label className="block text-sm font-medium">Full Name *</label>
//                   <input type="text" name="name" className="w-full border p-2 rounded" required />
//                 </div>
//                 <div className="flex-1">
//                   <label className="block text-sm font-medium">Email *</label>
//                   <input type="email" name="email" className="w-full border p-2 rounded" required />
//                 </div>
//               </div>

//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="flex-1">
//                   <label className="block text-sm font-medium">Contact Number *</label>
//                   <input type="text" name="contact" className="w-full border p-2 rounded" required />
//                 </div>
//                 <div className="flex-1">
//                   <label className="block text-sm font-medium">Subject *</label>
//                   <input type="text" name="subject" className="w-full border p-2 rounded" required />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium">Message *</label>
//                 <textarea name="message" className="w-full border p-2 rounded h-32" required></textarea>
//               </div>

//               <div className="flex items-center gap-3">
//                 <input type="checkbox" className="w-5 h-5" />
//                 <label>I'm not a robot</label>
//                 <div className="ml-auto">
//                   <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="h-10" />
//                 </div>
//               </div>

//               <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;



"use client";

import React, { useState } from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const departments = [
    {
      title: 'Admissions Office',
      description: 'For inquiries about admissions, tours, and enrollment.',
      phone: '(123) 456-7891',
      email: 'admissions@academyschool.edu'
    },
    {
      title: 'Financial Aid',
      description: 'For questions about scholarships, aid packages, and payment plans.',
      phone: '(123) 456-7892',
      email: 'financialaid@academyschool.edu'
    },
    {
      title: 'Academic Affairs',
      description: 'For curriculum questions and academic support services.',
      phone: '(123) 456-7893',
      email: 'academics@academyschool.edu'
    },
    {
      title: 'Athletics Department',
      description: 'For sports programs, tournaments, and athletic inquiries.',
      phone: '(123) 456-7894',
      email: 'athletics@academyschool.edu'
    },
    {
      title: 'Arts Program',
      description: 'For visual arts, music, theater, and performing arts programs.',
      phone: '(123) 456-7895',
      email: 'arts@academyschool.edu'
    },
    {
      title: 'Technology Support',
      description: 'For technology and computer service and technical assistance.',
      phone: '(123) 456-7896',
      email: 'techsupport@academyschool.edu'
    }
  ];

  const faqs = [
    {
      question: 'What are the best hours to contact the school?',
      answer: 'Our administrative offices are open Monday through Friday from 8:00 AM to 5:00 PM, and Saturdays from 9:00 AM to 12:00 PM. The best time to reach specific departments is during regular business hours.'
    },
    {
      question: 'How do I schedule a campus tour?',
      answer: 'You can schedule a campus tour by contacting our Admissions Office directly at (123) 456-7891 or by filling out the campus tour request form on our website. Tours are available Monday through Friday.'
    },
    {
      question: 'How long does it take to receive a response to inquiries?',
      answer: 'We strive to respond to all inquiries within 24-48 business hours. For urgent matters, we recommend calling our main office directly.'
    },
    {
      question: 'Is there parking available for visitors?',
      answer: 'Yes, visitor parking is available in designated spaces in our Administration building. Please check in at the front desk upon arrival to receive a visitor\'s pass.'
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="bg-white shadow-sm">
        <div className="bg-blue-600 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  <span>info@academyschool.edu</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:underline">Parent Portal</a>
                <a href="#" className="hover:underline">Student Portal</a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">ACADEMY</span>
              <span className="ml-2 text-2xl font-light text-orange-500">SCHOOL</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-900 hover:text-blue-600">About Us</a>
              <a href="#" className="text-gray-900 hover:text-blue-600">Admissions</a>
              <a href="#" className="text-gray-900 hover:text-blue-600">Funding</a>
              <a href="#" className="text-gray-900 hover:text-blue-600">Events</a>
              <a href="#" className="text-gray-900 hover:text-blue-600">Gallery</a>
              <a href="#" className="text-blue-600 border-b-2 border-blue-600">Contact</a>
            </nav>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="relative bg-gray-800 py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/api/placeholder/1200/600')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              We're here to help, answer any questions, and assist with any information you need about Academy School.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Get in Touch */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We welcome your questions, feedback, and inquiries. Please feel free to 
                contact us using the information below or by filling out the contact form.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">123 Education Blvd</p>
                    <p className="text-gray-600">Academic City, ST 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">Main: (123) 456-7890</p>
                    <p className="text-gray-600">Fax: (123) 456-7891</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@academyschool.edu</p>
                    <p className="text-gray-600">admissions@academyschool.edu</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
<div>
  <div className="bg-gray-50 p-8 rounded-lg">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Send Message
      </button>
    </form>
  </div>
</div>

</div>
</div>
</section>


      {/* Visit Our Campus */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Campus</h2>
            <p className="text-xl text-gray-600">
              We invite you to schedule a tour to experience Academy School firsthand.
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Interactive map would be displayed here</p>
          </div>

          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Schedule a Campus Tour
            </button>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600">
              Connect directly with our departments for specific inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{dept.title}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-blue-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm">{dept.phone}</span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">{dept.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, events, and updates from Academy School.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-r-lg font-medium transition-colors">
                Subscribe Now
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-blue-400">ACADEMY</span>
                <span className="ml-2 text-2xl font-light text-orange-400">SCHOOL</span>
              </div>
              <p className="text-blue-200 mb-4">
                Providing quality education and fostering academic excellence since 1985.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-blue-200 hover:text-white cursor-pointer" />
                <Twitter className="w-6 h-6 text-blue-200 hover:text-white cursor-pointer" />
                <Instagram className="w-6 h-6 text-blue-200 hover:text-white cursor-pointer" />
                <Linkedin className="w-6 h-6 text-blue-200 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white">Home</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Admissions</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Academics</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Events</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Gallery</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white">Parent Portal</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Student Portal</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Academic Calendar</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Library</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">Career Opportunities</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">News & Updates</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-200">123 Education Blvd, Academic City, AC 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="text-blue-200">(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="text-blue-200">info@academyschool.edu</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="font-semibold mb-2">Office Hours</h5>
                <div className="text-blue-200 text-sm">
                  <div className="flex items-center mb-1">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="ml-6">Saturday: 9:00 AM - 12:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2024 Academy School. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default ContactPage;