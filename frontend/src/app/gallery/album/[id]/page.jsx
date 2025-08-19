// app/gallery/album/[id]/page.jsx
"use client";

import React, { useState, useMemo } from "react";
import { useFetchData } from "../../../../store/hooks/useFetchData"; // adjust path if needed
const BASE_URL_MEDIA = "http://localhost:9000";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation"; // App Router. If you use Pages Router, use useRouter() and router.query.id
import { ArrowLeft } from 'lucide-react';

const AlbumPage = () => {
  const { id } = useParams(); // if Pages Router: const { query: { id } } = useRouter();
  const albumId = id ? String(id) : null;

  const { data: category, error: commError, loading: commLoading } =
    useFetchData("/api/gallery/category");
      const { data: hero, error: heroError, loading: heroLoading } = useFetchData('/api/gallery/hero');
    

  const isLoading = commLoading;
  const error = commError;

  const [selectedImage, setSelectedImage] = useState(null);



  // find category by id
  const album = Array.isArray(category)
    ? category.find((c) => String(c.id) === albumId)
    : null;

  // build album photos (flatten all photo arrays inside album.photos[*].photos)
  const albumPhotos = useMemo(() => {
    const imgs = [];
    if (!album || !Array.isArray(album.photos)) return imgs;

    album.photos.forEach((photoObj) => {
      let parsed = [];
      try {
        parsed = photoObj.photos ? JSON.parse(photoObj.photos) : [];
      } catch (e) {
        if (Array.isArray(photoObj.photos)) parsed = photoObj.photos;
      }

      if (!Array.isArray(parsed)) return;
      parsed.forEach((p, idx) => {
        if (!p) return;
        imgs.push({
          id: `${album.id}-${photoObj.id}-${idx}`,
          src: `${BASE_URL_MEDIA}${p}`,
          title: photoObj.feature_title || photoObj.description || album.title || "Photo",
          description: photoObj.description || "",
        });
      });
    });

    return imgs;
  }, [album]);

  if (!album) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Album not found</h1>
          <p className="text-gray-600 mb-6">We couldn't find the album you're looking for.</p>
          <Link href="/gallery" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  // album title + description: pick from album.meta or first photo object
  const albumTitle =
    (album.photos && album.photos[0] && album.photos[0].feature_title) || album.title || "Album";
  const albumDescription =
    (album.photos && album.photos[0] && album.photos[0].description) || album.title || "";

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {String(error)}</div>;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero / Album Header */}
      <section className="relative bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* render hero background only if album has a back_image at top-level (keeps consistent behavior) */}
        {hero?.[0]?.back_image && (
          <Image
            src={`${BASE_URL_MEDIA}${hero[0].back_image}`}
            alt={hero[0].title || 'Gallery Background'}
            fill
            priority
            unoptimized
            className="absolute inset-0 object-cover object-center opacity-60"
          />
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">{albumTitle}</h1>
            <p className="text-xl text-white/90">{albumDescription}</p>
            <div className="mt-6">
            <Link
  href="/gallery"
  className="inline-flex items-center gap-3 bg-white text-orange-600 hover:bg-white/90 px-4 py-2 rounded-lg font-medium shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
  aria-label="Back to Gallery"
>
  <ArrowLeft className="w-4 h-4" />
  <span>Back to Gallery</span>
</Link>

            </div>
          </div>
        </div>
      </section>

      {/* Album Info */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">{album.title}</h2>
            <p className="text-gray-600">{albumDescription}</p>
          </div>
          <div className="text-sm text-gray-500">
            {albumPhotos.length} photos
          </div>
        </div>
      </section>

      {/* Photo Grid (same UI as gallery) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {albumPhotos.map((image) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold">{image.title}</h3>
                    <p className="text-sm text-gray-300">{album.title}</p>
                  </div>
                </div>
              </div>
            ))}
            {albumPhotos.length === 0 && (
              <div className="col-span-full text-center text-gray-500">
                No photos in this album.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center text-white mt-4">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-300">{album.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlbumPage;
