import type Photo from "./Photo";
import React, { useState, useEffect } from 'react';

export interface GalleryProps {
  photos: Photo[];
  onPhotoClick: (fullsizePhoto: string) => void;
}

export interface GalleryPhotos {
  url: string,
  title: string,
  fullsize: string,
}

export const Gallery: React.FC<GalleryProps> = ({ photos, onPhotoClick }) => {
  const [photoUrls, setPhotoUrls] = useState<GalleryPhotos[]>([]);

  useEffect(() => {
    async function fetchPhotoUrls() {
      const photoList = await Promise.all(
        photos.map(async (photo) => {
          console.log("At gallery")
          const res = await fetch(`/api/aws?key=${encodeURIComponent(photo.thumbnail_url)}`)
          console.log("Gallery: after res")
          console.log(res)
          const data = await res.json();
          console.log("Gallery: after data")
          return { url: data.url, title: photo.title, fullsize: photo.fullsize_url };
        })
      );
      setPhotoUrls(photoList)
    }

    if (photos.length > 0) {
      fetchPhotoUrls();
    }
  }, [photos])

  return (
    <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-3 gap-5 max-w-7xl mx-auto">
      {photoUrls.map((photo, index) => (
        <div
          key={index}
          className="mb-5 break-inside-avoid cursor-pointer group"
          onClick={() => onPhotoClick(photo.fullsize)}
        >
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full object-cover shadow-md group-hover:scale-105 group-hover:brightness-50 transition-all duration-300 ease-in-out"
          />

          <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-md font-serif px-2 py-1 bg-black bg-opacity-50">
              {photo.title}
            </span>
          </div>
        </div>
      ))}
    </div>

  );
}

Gallery.displayName = "Gallery"