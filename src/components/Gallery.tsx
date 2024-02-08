import { useState } from "react";
import Thumbnail from "./Thumbnail";

import { FaAngleLeft, FaAngleRight, FaXmark } from "react-icons/fa6";

interface GalleryProps {
  mainImage: string;
  handleThumbnailClick: (newImage: string) => void;
}

const baseImagePath = "/img/";

export default function Gallery({
  mainImage,
  handleThumbnailClick,
}: GalleryProps) {
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const [isMainImageClicked, setIsMainImageClicked] = useState(false);

  const handleThumbnailClickWithIndex = (newImage: string, index: number) => {
    handleThumbnailClick(newImage);
    setActiveThumbnail(index);
  };

  const handleNavigation = (step: number) => {
    const nextThumbnail = activeThumbnail + step;
    if (nextThumbnail >= 0 && nextThumbnail <= 3) {
      setActiveThumbnail(nextThumbnail);
    }
  };

  const handleMainImageClick = () => {
    setIsMainImageClicked(!isMainImageClicked);
  };

  return (
    <div className="flex flex-col items-center gap-5 max-w-4xl">
      <button className="" onClick={handleMainImageClick}>
        <img src={mainImage} className="w-[450px] rounded-xl" />
      </button>
      {isMainImageClicked && activeThumbnail >= 0 && (
        <div className="fixed flex justify-center items-center z-10 top-0 left-0 w-full h-screen bg-black bg-opacity-70">
          <div className="flex justify-center items-center h-screen flex-col gap-5 max-w-4xl z-20 relative">
            <div className="absolute top-20 right-0">
              <button
                onClick={handleMainImageClick}
                className="text-white hover:text-Orange transition-colors duration-200 absolute top-24 -left-5"
              >
                <FaXmark className="size-7" />
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="bg-white hover:text-Orange text-[#1D2026] transition-colors duration-200 size-10 absolute -left-5 flex justify-center items-center rounded-full"
                onClick={() => handleNavigation(-1)}
              >
                <FaAngleLeft className="size-6" />
              </button>
              <img
                src={`${baseImagePath}image-product-${activeThumbnail + 1}.jpg`}
                alt={`Thumbnail ${activeThumbnail + 1}`}
                className="w-[400px] rounded-xl"
              />
              <button
                className="bg-white hover:text-Orange text-[#1D2026] transition-colors duration-200 size-10 absolute -right-5 flex justify-center items-center rounded-full"
                onClick={() => handleNavigation(1)}
              >
                <FaAngleRight className="size-6" />
              </button>
            </div>

            <div className="flex justify-between gap-2">
              {[1, 2, 3, 4].map((index) => (
                <Thumbnail
                  key={index}
                  isActive={activeThumbnail === index - 1}
                  src={`${baseImagePath}image-product-${index}-thumbnail.jpg`}
                  onClick={() =>
                    handleThumbnailClickWithIndex(
                      `${baseImagePath}image-product-${index}.jpg`,
                      index - 1
                    )
                  }
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between gap-6">
        {[1, 2, 3, 4].map((index) => (
          <Thumbnail
            key={index}
            isActive={activeThumbnail === index - 1}
            src={`${baseImagePath}image-product-${index}-thumbnail.jpg`}
            onClick={() =>
              handleThumbnailClickWithIndex(
                `${baseImagePath}image-product-${index}.jpg`,
                index - 1
              )
            }
          />
        ))}
      </div>
    </div>
  );
}
