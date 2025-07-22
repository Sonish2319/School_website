export default function Footer() {
    return (
      <footer className="bg-indigo-900 text-white mt-10">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-6">
          <div>
            <img src="/logo.png" alt="Logo" className="h-10 mb-2" />
            <p className="text-sm">Vibhuti Vidya Mandir School<br />Nurturing excellence with integrity.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Student Essentials</h4>
            <ul className="space-y-1 text-sm">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Connect</h4>
            <ul className="space-y-1 text-sm">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Get Help</h4>
            <ul className="space-y-1 text-sm">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </div>
        <div className="text-center py-4 border-t border-white/20 text-sm">
          © 2025 Vibhuti Vidya Mandir School. All rights reserved.
        </div>
      </footer>
    );
  }
  