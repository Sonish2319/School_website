import Image from 'next/image';

export default function Facilities() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-[#D43535] mb-6">Our Facilities</h1>
      <p className="text-[#545454] mb-8">
        We provide excellent facilities that support holistic education and personal development of students.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Science Lab", image: "/images/facility1.jpg" },
          { title: "Library", image: "/images/facility2.jpg" },
          { title: "Computer Lab", image: "/images/facility3.jpg" },
          { title: "Sports Ground", image: "/images/facility4.jpg" },
          { title: "Music Room", image: "/images/facility5.jpg" },
          { title: "Cafeteria", image: "/images/facility6.jpg" },
        ].map((f, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4">
            <Image
              src={f.image}
              width={400}
              height={250}
              alt={f.title}
              className="w-full h-[200px] object-cover rounded-md"
            />
            <h3 className="mt-4 font-medium text-lg text-[#282828]">{f.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
