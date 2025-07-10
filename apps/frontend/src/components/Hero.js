export default function HeroSection() {
    return (
      <section>
        <div>
          <img
            src="/school.jpg"
            alt="School Building"
            className="w-full  object-cover"
          />
        </div>
  
        <div className="text-center px-8 py-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6">
            Welcome to Our Global Learning Community
          </h2>
          <p className="text-gray-700 mb-8">
            As an international school, we are dedicated to fostering a diverse, inclusive, and globally aware
            environment where students from all backgrounds thrive. Our commitment goes beyond academics — we nurture
            future leaders equipped with the skills, values, and perspectives to succeed in a rapidly changing world.
          </p>
          <button className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Discover Our Vision
          </button>
        </div>
      </section>
    );
  }
  