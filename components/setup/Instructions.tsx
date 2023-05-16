import Image, { StaticImageData } from "next/image";
import LunchTrakPair from "@/public/img/setup/LunchTrakPair.png";
import WebBluetoothPair from "@/public/img/setup/WebBluetoothPair.png";

import ImageSlides from "./ImageSlides";

interface InstructionsType {
  title: string;
  description: string;
  images: StaticImageData[];
}

const Instructions = ({ currentStep }: { currentStep: number }) => {
  //TODO: add images
  const instructions: InstructionsType[] = [
    {
      title: "Pair Your LunchTrak Tag",
      description:
        "Remove the lid and hold the PAIR button for 3 seconds (it is the bottom one)",
      images: [LunchTrakPair, WebBluetoothPair],
    },
    {
      title: "Enter Student ID",
      description: "",
      images: [],
    },
    {
      title: "Is the ID correct?",
      description: "Verify your student ID and you're all set!",
      images: [],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-2 sm:p-4">
      <div className="text-center text-3xl font-semibold text-gray-700 dark:text-white">
        {instructions[currentStep].title}
      </div>
      <div className="flex flex-col space-y-2 text-gray-500">
        <div className="flex flex-col items-center">
          <div className="break-words text-center text-lg">
            {instructions[currentStep].description}
          </div>
          {instructions[currentStep].images.length > 0 && (
            <ImageSlides images={instructions[currentStep].images} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Instructions;
