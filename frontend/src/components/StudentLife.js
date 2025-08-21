// 'use client';
// import Image from 'next/image';
// import { useFetchData } from '../store/hooks/useFetchData';
// import Link from 'next/link';

// const BASE_URL_MEDIA = 'http://localhost:9000';
// const DEFAULT_IMAGE = '/default-school.jpg'; // fallback image

// const StudentLife = () => {

//   const { data: studentData, error: heroError, loading: heroLoading } = useFetchData('/api/home/homeStudent');

//   const isLoading = heroLoading;
//   const error = heroError;

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;


//   const activities = [
//     {
//       title: "Debate Competition",
//       image: "/debate-competition.jpg",
//       description: "Developing public speaking and critical thinking skills through competitive debates."
//     },
//     {
//       title: "Football Team",
//       image: "/football-team.jpg", 
//       description: "Building teamwork, fitness, and sportsmanship through our championship football program."
//     },
//     {
//       title: "Science Fair",
//       image: "/science-fair.jpg",
//       description: "Encouraging scientific inquiry and innovation through hands-on experiments and projects."
//     }
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-red-600 mb-4">Student Life</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Beyond academics, our students engage in diverse activities that develop their talents, 
//             interests, and leadership skills.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {activities.map((activity, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//               <div className="relative h-64">
//                 <Image
//                   src={activity.image}
//                   alt={activity.title}
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium">
//             See More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StudentLife;


'use client';
import Image from 'next/image';
import { useFetchData } from '../store/hooks/useFetchData';
import Link from 'next/link';

const BASE_URL_MEDIA = 'http://localhost:9000';
const DEFAULT_IMAGE = '/default-school.jpg'; // fallback image

const StudentLife = () => {
  const { data: studentData, error: heroError, loading: heroLoading } = useFetchData('/api/home/homeStudent');

  const isLoading = heroLoading;
  const error = heroError;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Student Life</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beyond academics, our students engage in diverse activities that develop their talents, 
            interests, and leadership skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studentData?.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src={activity.image ? `${BASE_URL_MEDIA}${activity.image}` : DEFAULT_IMAGE}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
