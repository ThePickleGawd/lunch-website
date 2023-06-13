import { instructions } from "@/data/setupInstructions";
import ImageSlides from "./ImageSlides";

const Instructions = ({ currentStep }: { currentStep: number }) => {
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
        </div>
      </div>
    </div>
  );
};

export default Instructions;
