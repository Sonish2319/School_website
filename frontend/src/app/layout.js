// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: 'Vibhuti Vidya Mandir School',
//   description: 'Global Learning Community',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }


// src/app/layout.jsx
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Navbar';
import Footer from '../components/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vibhuti Vidhya Mandir School - Nurturing Tomorrow\'s Leaders',
  description: 'Vibhuti Vidhya Mandir School - A premier educational institution committed to academic excellence, character building, and global citizenship. Join our learning community today.',
  keywords: 'school, education, CBSE, academic excellence, character building, global citizenship, Vibhuti Vidhya Mandir',
  authors: [{ name: 'Vibhuti Vidhya Mandir School' }],
  creator: 'Vibhuti Vidhya Mandir School',
  publisher: 'Vibhuti Vidhya Mandir School',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Vibhuti Vidhya Mandir School - Nurturing Tomorrow\'s Leaders',
    description: 'A premier educational institution committed to academic excellence, character building, and global citizenship.',
    url: 'https://vibhutividhyamandir.edu',
    siteName: 'Vibhuti Vidhya Mandir School',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vibhuti Vidhya Mandir School',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibhuti Vidhya Mandir School - Nurturing Tomorrow\'s Leaders',
    description: 'A premier educational institution committed to academic excellence, character building, and global citizenship.',
    images: ['/twitter-image.jpg'],
    creator: '@vibhutividhya',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}