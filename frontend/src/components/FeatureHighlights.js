export default function FeatureHighlights() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 py-12 text-center">
        <div>
          <div className="text-3xl mb-2">🎓</div>
          <h3 className="font-semibold mb-1">Academic Excellence</h3>
          <p className="text-sm text-gray-600">
            We offer a strong academic foundation led by experienced educators.
          </p>
        </div>
        <div>
          <div className="text-3xl mb-2">💖</div>
          <h3 className="font-semibold mb-1">Character Building</h3>
          <p className="text-sm text-gray-600">
            We nurture values like empathy, leadership, and integrity.
          </p>
        </div>
        <div>
          <div className="text-3xl mb-2">🌍</div>
          <h3 className="font-semibold mb-1">Global Citizenship</h3>
          <p className="text-sm text-gray-600">
            We celebrate cultural diversity and global awareness.
          </p>
        </div>
      </div>
    );
  }
  