"use client";
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useFetchData } from '../../store/hooks/useFetchData';
import Image from 'next/image';
const BASE_URL_MEDIA = 'http://localhost:9000';


const EventsCalendarPage = () => {
  const [activeTab, setActiveTab] = useState('All Events');

  const { data: hero, error: heroError, loading: heroLoading } = useFetchData('/api/event/hero');
  const { data: upcomming, error: uError, loading: uLoading } = useFetchData('/api/event/upcomming');
  const { data: semester, error: sError, loading: sLoading } = useFetchData('/api/event/semester');

  const isLoading = heroLoading  || uLoading || sLoading;
  const error = heroError  || uError || sError;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const path = `${BASE_URL_MEDIA}${hero[0].back_image}`;
  console.log('path', path);

  const heroData = hero?.[0];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Open House',
      date: 'September 15, 2024',
      time: '9:00 AM - 12:00 PM',
      location: 'Main Campus',
      image: '/api/placeholder/300/200',
      description: 'Join us for our annual open house event where you can explore our campus, meet our faculty, and learn about our programs. This is a perfect opportunity to get a feel for our academic community.',
      category: 'Campus Events'
    },
    {
      id: 2,
      title: 'Parent-Teacher Conference',
      date: 'September 20, 2024',
      time: '2:00 PM - 6:00 PM',
      location: 'Conference Room',
      image: '/api/placeholder/300/200',
      description: 'An opportunity to discuss your child\'s academic progress, social development, and any concerns you may have. Please schedule your appointment in advance.',
      category: 'Academic'
    },
    {
      id: 3,
      title: 'Fall Festival',
      date: 'October 12, 2024',
      time: '11:00 AM - 4:00 PM',
      location: 'School Grounds',
      image: '/api/placeholder/300/200',
      description: 'Come and celebrate the fall season! This family-friendly event includes games, food vendors, live music, and activities for all ages.',
      category: 'Community'
    },
    {
      id: 4,
      title: 'Science Fair',
      date: 'October 25, 2024',
      time: '10:00 AM - 3:00 PM',
      location: 'Science Center',
      image: '/api/placeholder/300/200',
      description: 'Students will showcase their scientific projects and experiments. Come see the innovative work our students have been developing.',
      category: 'Academic'
    },
    {
      id: 5,
      title: 'Art Exhibition',
      date: 'November 8, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'Art Gallery',
      image: '/api/placeholder/300/200',
      description: 'Featuring student artwork from various mediums including paintings, sculptures, and digital art. Light refreshments will be served.',
      category: 'Arts'
    },
    {
      id: 6,
      title: 'Winter Concert',
      date: 'December 15, 2024',
      time: '7:00 PM - 9:00 PM',
      location: 'Performing Arts Center',
      image: '/api/placeholder/300/200',
      description: 'Our music students will perform seasonal favorites and classical pieces. Join us for an evening of beautiful music to celebrate the season.',
      category: 'Arts'
    },
    {
      id: 7,
      title: 'Varsity Basketball Tournament',
      date: 'January 18-20, 2025',
      time: 'Various Times',
      location: 'Athletic Center',
      image: '/api/placeholder/300/200',
      description: 'Cheer on our varsity basketball teams as they compete in the annual tournament. Tickets available at the door. Concessions available.',
      category: 'Sports'
    }
  ];

  const academicCalendar = {
    'Fall Semester': [
      { date: 'August 26', event: 'First Day of Semester' },
      { date: 'August 30', event: 'Faculty In-Service Day' },
      { date: 'August 31', event: 'First Day of School' },
      { date: 'September 4', event: 'Labor Day - No School' },
      { date: 'October 9-13', event: 'Parent-Teacher Conferences' },
      { date: 'October 31', event: 'Fall Break Day School' },
      { date: 'November 11-15', event: 'Thanksgiving Break - No School' },
      { date: 'December 16', event: 'Last Day of Fall Semester' },
      { date: 'December 19 - January 3', event: 'Winter Break - No School' }
    ],
    'Spring Semester': [
      { date: 'January 6', event: 'Classes Resume' },
      { date: 'January 15', event: 'Martin Luther King Jr. Day - No School' },
      { date: 'February 19', event: 'Presidents Day - No School' },
      { date: 'March 25-29', event: 'Spring Break - No School' },
      { date: 'April 14', event: 'Easter Break - No School' },
      { date: 'May 26', event: 'Memorial Day - No School' },
      { date: 'June 6', event: 'Last Day of School' },
      { date: 'June 8', event: 'Graduation Ceremony' }
    ]
  };

  // const tabs = ['All Events', 'Academic', 'Admissions', 'Arts', 'Athletics', 'Community'];
  const allCategories = ['All Events', ...Array.from(new Set(upcomming.map(event => event.category)))];

  // Filter events based on active tab
const filteredEvents =
activeTab === 'All Events'
  ? upcomming
  : upcomming.filter(event => event.category === activeTab);

console.log(upcomming?.[0]?.time);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Events & Calendar</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay connected with our vibrant school community through our exciting events and important academic dates.
            </p>
          </div>
        </div>
      </section> */}

      <section className="relative h-[500px] bg-gray-900">
      {heroData?.back_image && (
        <Image
          src={`${BASE_URL_MEDIA}${heroData.back_image}`}
          alt={heroData.title || 'Events & Calendar'}
          fill
          priority
          unoptimized
          className="object-cover"
        />
      )}

      {/* overlay */}
      <div className="absolute inset-0 bg-opacity-60" />

      <div className="relative z-10 flex items-center h-full text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              {heroData?.title || 'Events & Calendar'}
            </h1>
            <p className="text-xl text-white/90">
              {heroData?.sub_text ||
                'Stay connected with our vibrant school community through our exciting events and important academic dates.'}
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Navigation Tabs */}
      {/* <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center space-x-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Upcoming Events */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">
              Join us for these exciting events happening at Academy School
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Event Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

<section className="bg-gray-50 py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap justify-center space-x-6">
      {allCategories.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-3 rounded-full font-medium transition-colors ${
            activeTab === tab
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>
</section>

{/* Upcoming Events */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
      <p className="text-xl text-gray-600">
        Join us for these exciting events happening at Academy School
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredEvents.map((event) => (
        <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img 
            src={event.image ? `${BASE_URL_MEDIA}${event.image}` : '/api/placeholder/300/200'} 
            alt={event.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="mb-3">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {event.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
            
            <div className="space-y-2 mb-4">
  <div className="flex items-center text-gray-600">
    <Calendar className="w-4 h-4 mr-2" />
    <span>
      {new Date(event.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })}
    </span>
  </div>
  <div className="flex items-center text-gray-600">
    <Clock className="w-4 h-4 mr-2" />
    <span>{event.time}</span>
  </div>
  <div className="flex items-center text-gray-600">
    <MapPin className="w-4 h-4 mr-2" />
    <span>{event.location}</span>
  </div>
</div>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {event.description}
            </p>
            
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Event Details
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Academic Calendar */}
      {/* <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Calendar</h2>
            <p className="text-xl text-gray-600">
              Important dates for the current school year at Academy School
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(academicCalendar).map(([semester, events]) => (
              <div key={semester} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white px-6 py-4">
                  <h3 className="text-2xl font-bold">{semester}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {events.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                        <span className="font-medium text-gray-900">{item.date}</span>
                        <span className="text-gray-600">{item.event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
              Download Complete Calendar
            </button>
          </div>
        </div>
      </section> */}

      <section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Calendar</h2>
      <p className="text-xl text-gray-600">
        Important dates for the current school year at Academy School
      </p>
    </div>

    <div className="space-y-8">
      {semester.map((semesters) => (
        <div key={semesters.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white px-6 py-4">
            <h3 className="text-2xl font-bold">{semesters.semester_name}</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {semesters.calendarEvents.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                >
                  <span className="font-medium text-gray-900">{item.date}</span>
                  <span className="text-gray-600">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-8">
      <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
        Download Complete Calendar
      </button>
    </div>
  </div>
</section>


        {/* Call to Action Section */}

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

      {/* Event Registration */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Registration</h2>
            <p className="text-xl text-gray-600">
              Register for upcoming events. Sign up for advance registration notifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Open House</h3>
              </div>
              <p className="text-gray-600 mb-4">
                <strong>September 15, 2024 | 9:00 AM - 12:00 PM</strong>
              </p>
              <p className="text-gray-600 mb-6">
                Register now to attend our open house event. Get to know our faculty, tour the campus, and learn about our programs.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Register Now
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Parent-Teacher Conferences</h3>
              </div>
              <p className="text-gray-600 mb-4">
                <strong>September 20, 2024 | 2:00 PM - 6:00 PM</strong>
              </p>
              <p className="text-gray-600 mb-6">
                Schedule your appointment for parent-teacher conferences. Discuss your child's progress and development.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Event Registration Section */}
      <section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Registration</h2>
      <p className="text-xl text-gray-600">
        Register for upcoming events. Sign up for advance registration notifications
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {upcomming
        .filter(event => event.openRegistration)
        .map(event => {
          const eventDate = new Date(event.date);
          const formattedDate = eventDate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          });

          return (
            <div key={event.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                {(event.category === 'Academic' || event.category === 'Admissions') ? (
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                ) : (
                  <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                )}
                <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">
                <strong>{`${formattedDate} | ${event.time}`}</strong>
              </p>
              <p className="text-gray-600 mb-6">
                {event.description}
              </p>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                {event.button_text || 'Register Now'}
              </button>
            </div>
          );
        })}
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

export default EventsCalendarPage;