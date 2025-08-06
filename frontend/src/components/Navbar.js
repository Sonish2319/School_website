// import Notice from "./Notice";

// export default function Navbar() {
//     return (
//         <>
//         <Notice />
//       <nav className=" text-black fixed top-[88px] left-[0.99px] z-50 w-[1439px] h-[103px] px-[144px] flex items-center justify-between gap-[92px]">
//         {/* Left: Logo and Title */}
//         <div className="flex items-center gap-3">
//           <img src="/logo.png" alt="VVM Logo" className="h-14 w-14" />
//           <h1 className="font-[Acumin Pro] font-semibold text-[18px] leading-[22px] uppercase">
//             Vibhuti Vidhya Mandir School
//           </h1>
//         </div>
  
//         {/* Right: Navigation Menu */}
//         <ul className="h-[70px] pt-4 pr-8 pb-4 pl-5 flex items-center gap-6">
//           {['Home', 'About Us', 'Facilities', 'Admissions', 'Funds', 'Contact Us'].map((item) => (
//             <li
//               key={item}
//               className="h-[38px] px-4 py-2 flex items-center justify-center font-[Acumin Pro] font-medium text-[15px] leading-[22px] uppercase cursor-pointer hover:text-gray-300 whitespace-nowrap"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </>
//     );
     
//   }

// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react';

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "About Us", path: "/about" },
//   { name: "Facilities", path: "/facilities" },
//   { name: "Admissions", path: "/admissions" },
//   { name: "Funds", path: "/funds" },
//   { name: "Contact Us", path: "/contact" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 80);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Optional Notice component */}
//       {/* <Notice /> */}
//       <div style={{ height: "90px" }} />

//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
//           isScrolled
//             ? "bg-white bg-opacity-95 shadow-md border-b border-gray-200 backdrop-blur-sm"
//             : "bg-white"
//         }`}
//       >
//         <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-4 flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3">
//             <img src="/logo.png" alt="School Logo" className="h-12 w-12" />
//             <h1 className="text-[18px] font-semibold uppercase text-black">
//               Vibhuti Vidhya Mandir School
//             </h1>
//           </Link>

//           {/* Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.path}
//                 className={`text-[15px] font-medium uppercase tracking-wide transition-colors duration-200 ${
//                   pathname === link.path
//                     ? "text-[#d43535] border-b-2 border-[#d43535] pb-1"
//                     : "text-gray-800 hover:text-[#d43535]"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }


// src/components/Header.jsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    // { href: '/facilities', label: 'Facilities' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/funds', label: 'Funds' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/events', label: 'Events and Calender' },
    { href: 'gallery', label: 'Gallery' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">VIBHUTI VIDHYA MANDIR</h1>
              <p className="text-sm text-gray-600">SCHOOL</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;