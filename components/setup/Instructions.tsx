import Image, { StaticImageData } from "next/image";

interface InstructionsType {
  title: string;
  description: string;
  image: string | StaticImageData;
}

const Instructions = ({ currentStep }: { currentStep: number }) => {
  //TODO: add images
  const instructions: InstructionsType[] = [
    {
      title: "Pair Your LunchTrak Tag",
      description:
        "Remove the lid and hold the PAIR button for 3 seconds (it is the bottom one)",
      image: "/img/setup/LunchTrakPair.png",
    },
    {
      title: "Enter Student ID",
      description: "",
      image: "",
    },
    {
      title: "Congrats! You're Done.",
      description: "Enjoy getting your lunch faster",
      image: "",
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
          {instructions[currentStep].image && (
            <Image
              src={instructions[currentStep].image}
              alt=""
              width={300}
              height={300}
              className="m-8"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Instructions;
