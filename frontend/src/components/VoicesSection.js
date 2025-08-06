// components/VoicesSection.js
import Image from 'next/image';

const VoicesSection = () => {
  const voices = [
    {
      title: "PARENTS",
      image: "/parents-voice.jpg",
      description: "Hear from parents about their experience with our school community and their children's growth."
    },
    {
      title: "TEACHERS", 
      image: "/teachers-voice.jpg",
      description: "Our dedicated educators share their passion for teaching and commitment to student success."
    },
    {
      title: "STUDENTS",
      image: "/students-voice.jpg", 
      description: "Current students share their experiences, achievements, and what makes our school special."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Voices That Matter</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Listen to the experiences and stories from our school community - parents, teachers, 
            and students who make Vibhuti Vidhya Mandir special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {voices.map((voice, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src={voice.image}
                  alt={voice.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{voice.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{voice.description}</p>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                  Read Stories →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoicesSection;