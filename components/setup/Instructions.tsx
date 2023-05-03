import Image from "next/image";

interface InstructionsType {
  title: string;
  description: Array<{ text: string; image?: string }>;
}

const Instructions = ({ currentStep }: { currentStep: number }) => {
  //TODO: add images
  const instructions: InstructionsType[] = [
    {
      title: "Pair Tag",
      description: [
        {
          text: "1. Press the button on your tag to pair it with your phone.",
          image: "/img/user1.jpg",
        },
      ],
    },
    {
      title: "Pair Tag",
      description: [
        {
          text: "Press the button on your tag to pair it with your phone.",
          image: "/img/user1.jpg",
        },
      ],
    },
    {
      title: "Pair Tag",
      description: [
        {
          text: "Press the button on your tag to pair it with your phone.",
          image: "/img/user1.jpg",
        },
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col space-y-2">
      <div className="text-3xl text-gray-700 font-semibold">
        {instructions[currentStep].title}
      </div>
      <div>
        {instructions[currentStep].description.map((data) => (
          <>
            {data.text}
            {data.image && (
              <Image src={data.image} alt="" width={50} height={50} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Instructions;
