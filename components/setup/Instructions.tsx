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
      description: "Remove the lid and hold the PAIR button for 3 seconds",
      image: "/img/benefit-one.png",
    },
    {
      title: "Enter Student ID",
      description: "",
      image: "",
    },
    {
      title: "Congrats! Your Done.",
      description: "Enjoy getting your lunch faster",
      image: "",
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col space-y-2 sm:p-4">
      <div className="text-3xl text-gray-700 font-semibold dark:text-white">
        {instructions[currentStep].title}
      </div>
      <div className="flex flex-col space-y-2 text-gray-500">
        <div className="flex flex-col items-center">
          <div className="text-lg">{instructions[currentStep].description}</div>
          {instructions[currentStep].image && (
            <Image
              src={instructions[currentStep].image}
              alt=""
              width={200}
              height={200}
              className="mt-4"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Instructions;
