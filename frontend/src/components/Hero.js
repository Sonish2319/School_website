// export default function HeroSection() {
//     return (
//       <section>
//         <div>
//           <img
//             src="/school.jpg"
//             alt="School Building"
//             className="w-full  object-cover"
//           />
//         </div>
  
//         <div className="text-center px-8 py-10 max-w-4xl mx-auto">
//           <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6">
//             Welcome to Our Global Learning Community
//           </h2>
//           <p className="text-gray-700 mb-8">
//             As an international school, we are dedicated to fostering a diverse, inclusive, and globally aware
//             environment where students from all backgrounds thrive. Our commitment goes beyond academics — we nurture
//             future leaders equipped with the skills, values, and perspectives to succeed in a rapidly changing world.
//           </p>
//           <button className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
//             Discover Our Vision
//           </button>
//         </div>
//       </section>
//     );
//   }


import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-cyan-50">
      {/* Banner */}
      <div className="relative w-full h-[450px] md:h-[550px]">
        <Image
          src="/school.jpg"
          alt="Vibhuti Vidhya Mandir School Building"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Content Below Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Heading, Paragraph, Button */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-red-600 mb-6">
              Welcome to Our Global <br /> Learning Community
            </h1>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              As an international school, we are dedicated to fostering a diverse, inclusive, 
              and globally aware environment where students from all backgrounds thrive. 
              Our commitment goes beyond academics — we nurture future leaders equipped 
              with the skills, values, and perspectives to succeed in a rapidly changing world.
            </p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium">
              Discover Our Vision
            </button>
          </div>

          {/* Right: Feature Grid (2x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Feature
              title="Academic Excellence"
              description="We offer a strong academic foundation led by experienced educators."
              icon="🎓"
            />
            <Feature
              title="Character Building"
              description="We nurture values like empathy, leadership, and integrity."
              icon="🏅"
            />
            <Feature
              title="Global Citizenship"
              description="We celebrate cultural diversity and global awareness."
              icon="🌍"
            />
            <Feature
              title="Global Citizenship"
              description="We celebrate cultural diversity and global awareness."
              icon="💖"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ title, description, icon }) => (
  <div className="flex items-start space-x-4">
    <div className="text-3xl">{icon}</div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default HeroSection;
