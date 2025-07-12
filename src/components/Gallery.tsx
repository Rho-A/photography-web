// export type Photo = {
//   src: string;
//   alt: string;
//   title: string;
// }
import type Photo from "./Photo";

type GalleryProps = {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

function Gallery({ photos, onPhotoClick }: GalleryProps) {
  return (
    <div className="flex flex-wrap sm:flex-col md:flex-row max-w-7xl mx-auto md:items-start justify-center items-center gap-5 transition-all duration-300 ease-in-out">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="relative group sm:max-w-[350px] sm:max-h-full md:max-w-[400px] md:max-h-full w-full h-full cursor-pointer"
          onClick={() => onPhotoClick(photo)}
        >
          {/* Image */}
          <img
            src={photo.thumbnail_url}
            alt={photo.title}
            className="w-full h-full object-cover shadow-md group-hover:scale-105 group-hover:brightness-50 transition-all duration-300 ease-in-out"
          />

          {/* Title Overlay */}
          <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-md font-serif px-2 py-1">
              {photo.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;