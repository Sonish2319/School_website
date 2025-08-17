"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { useFetchData } from '../../store/hooks/useFetchData';
const BASE_URL_MEDIA = 'http://localhost:9000';


const ContactPage = () => {


  const { data: hero, error: heroError, loading: heroLoading } = useFetchData('/api/contact/hero');
  const { data: touch, error: tError, loading: tLoading } = useFetchData('/api/contact/touch');
  const { data: faq, error: fError, loading: fLoading } = useFetchData('/api/contact/faq');
  const { data: visit, error: vError, loading: vLoading } = useFetchData('/api/contact/visit');
  const { data: department, error: dError, loading: dLoading } = useFetchData('/api/contact/department');


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [expandedFAQ, setExpandedFAQ] = useState(null);

    // Combine loading and error states
    const isLoading = heroLoading  || vLoading || fLoading || dLoading || tLoading;
    const error = heroError  || vError || fError || dError  || tError;
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    const path = `${BASE_URL_MEDIA}${hero[0].back_image}`;
    console.log('path', path);

    const heroData = hero?.[0];
    const visitData = visit?.[0];

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

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="relative bg-gray-800 py-20">
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
      </section> */}


      <section className="relative h-[500px]"> 
  {heroData?.back_image && (
    <Image
      src={`${BASE_URL_MEDIA}${heroData.back_image}`}
      alt={heroData.title || 'Contact Us'}
      fill
      priority
      unoptimized
      className="object-cover"
    />
  )}

  {/* overlay */}
  <div className="absolute inset-0 bg-opacity-50"></div>

  <div className="relative z-10 flex items-center h-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">
          {heroData?.title || "Contact Us"}
        </h1>
        <p className="text-xl text-white/90">
          {heroData?.description ||
            "We're here to help, answer any questions, and assist with any information you need about Academy School."}
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Get in Touch */}
            {/* <div>
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
            </div> */}
            <div>
  <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
  <p className="text-gray-600 mb-8">
    We welcome your questions, feedback, and inquiries. Please feel free to 
    contact us using the information below or by filling out the contact form.
  </p>

  <div className="space-y-6">
    {touch?.map((item) => (
      <div key={item.id} className="flex items-start">
        <i className={`${item.icon} w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0`}></i>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
          <p className="text-gray-600">{item.line1}</p>
          <p className="text-gray-600">{item.line2}</p>
        </div>
      </div>
    ))}
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
      {/* <section className="bg-gray-50 py-16">
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
      </section> */}

      <section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Campus</h2>
      <p className="text-xl text-gray-600">
        {visitData?.sub_text}
      </p>
    </div>

    <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center overflow-hidden">
      {visitData?.map ? (
        <iframe
          src={visitData.map}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      ) : (
        <p className="text-gray-500">Interactive map would be displayed here</p>
      )}
    </div>

    <div className="text-center mt-8">
      <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors font-medium">
        {visitData?.button_text || "Schedule a Campus Tour"}
      </button>
    </div>
  </div>
</section>

      {/* Department Contacts */}
      {/* <section className="py-16">
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
      </section> */}

      <section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Department Contacts</h2>
      <p className="text-xl text-gray-600">
        Connect directly with our departments for specific inquiries.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {department?.map((dept) => (
        <div
          key={dept.id}
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
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
      {/* <section className="bg-gray-50 py-16">
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
      </section> */}


      <section className="bg-gray-50 py-16">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
    </div>

    <div className="space-y-4">
      {faq?.map((faqs, index) => (
        <div key={faqs.id} className="bg-white rounded-lg shadow-sm">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-900">{faqs.question}</h3>
            {expandedFAQ === index ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
          {expandedFAQ === index && (
            <div className="px-6 pb-4">
              <p className="text-gray-600">{faqs.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Stay Updated */}
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

export default ContactPage;