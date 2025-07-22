export default function Section() {
    return (
      <>
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
            {["Primary School", "Secondary School", "Primary School"].map((title, i) => (
              <div key={i} className="bg-gray-100 rounded-lg shadow p-4">
                <img src={`/school-${i + 1}.jpg`} alt={title} className="w-full h-40 object-cover rounded-md" />
                <h3 className="mt-4 font-semibold text-center">{title}</h3>
              </div>
            ))}
          </div>
        </div>
  
        <div className="bg-red-50 py-10">
          <h2 className="text-center text-2xl font-bold text-red-600 mb-6">Student Life</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-4">
            {["Debate Competition", "Football Team", "Science Fair"].map((item, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden shadow-md bg-white">
                <img src={`/life-${idx + 1}.jpg`} alt={item} className="w-full h-40 object-cover" />
                <p className="p-3 text-center font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  