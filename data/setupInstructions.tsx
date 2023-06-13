import Image, { StaticImageData } from "next/image";
import LunchTrakPair from "@/public/img/setup/LunchTrakPair.png";
import WebBluetoothPair from "@/public/img/setup/WebBluetoothPair.png";

interface InstructionsType {
  title: string;
  description: string;
  images: StaticImageData[];
}

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

export { instructions };
