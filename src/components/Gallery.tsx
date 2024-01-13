import { useState } from "react";
import Thumbnail from "./Thumbnail";

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
    <div className="flex flex-col gap-5 max-w-4xl">
      <button className="" onClick={handleMainImageClick}>
        <img src={mainImage} className="w-80 rounded-xl" />
      </button>
      {isMainImageClicked && activeThumbnail >= 0 && (
        <div className="fixed flex justify-center items-center z-10 top-0 left-0 w-full h-screen bg-black bg-opacity-70">
          <div className="flex justify-center items-center h-screen flex-col gap-5 max-w-4xl z-20 relative">
            <div className="absolute top-20 right-0">
              <button
                onClick={handleMainImageClick}
                className="text-white hover:text-Orange transition-colors duration-200"
              >
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="bg-white hover:text-Orange text-[#1D2026] transition-colors duration-200 size-10 absolute -left-5 flex justify-center items-center rounded-full"
                onClick={() => handleNavigation(-1)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18">
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="currentColor"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
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
                <svg
                  width="13"
                  height="18"
                  fill="CurrentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m2 1 8 8-8 8"
                    stroke="currentColor"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="flex justify-between w-80">
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
      <div className="flex justify-between w-80">
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
