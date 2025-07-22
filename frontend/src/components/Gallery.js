export default function Gallery() {
    return (
      <section className="py-10">
        <h2 className="text-center text-2xl font-bold text-red-600 mb-6">Vibhuti Gallery</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <img
              key={idx}
              src={`/gallery-${idx + 1}.jpg`}
              alt={`Gallery ${idx + 1}`}
              className="rounded-lg w-full h-40 object-cover"
            />
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="px-6 py-2 bg-indigo-700 text-white rounded">See More</button>
        </div>
      </section>
    );
  }
  