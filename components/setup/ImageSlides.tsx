import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import LunchTrakPair from "@/public/img/setup/LunchTrakPair.png";
import WebBluetoothPair from "@/public/img/setup/WebBluetoothPair.png";

const ImageSlides = ({ images }: { images: StaticImageData[] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  const handlePrev = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(images.length - 1);
    }
  };

  return (
    <div className="relative mb-12 mt-8 w-full">
      <div className="relative h-80 rounded-lg">
        {images.map((src, index) => (
          <div key={index} className="duration-700 ease-in-out">
            <Image
              src={src}
              className={`${
                index === currentImage ? "" : "hidden"
              } absolute left-1/2 top-1/2 block h-full w-auto -translate-x-1/2 -translate-y-1/2 rounded-lg`}
              alt="..."
            />
          </div>
        ))}
      </div>
      <div className="absolute -bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            className={`${
              currentImage === index
                ? "bg-gray-500 dark:bg-gray-300"
                : "bg-gray-300 dark:bg-gray-500"
            } h-3 w-3 rounded-full hover:bg-gray-600`}
            key={index}
            onClick={() => setCurrentImage(index)}
          ></button>
        ))}
      </div>
      <button
        className={`${
          currentImage === 0 && "hidden"
        } group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none`}
        onClick={handlePrev}
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full sm:h-8 sm:w-8">
          <ChevronLeftIcon className="group-hover:text-black dark:group-hover:text-white" />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        className={`${
          currentImage === images.length - 1 && "hidden"
        } group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none`}
        onClick={handleNext}
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full sm:h-8 sm:w-8">
          <ChevronRightIcon className="group-hover:text-black dark:group-hover:text-white" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default ImageSlides;
