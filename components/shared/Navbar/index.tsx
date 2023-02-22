import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import logo from "@/public/lunchtrakLogo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-screen py-4 px-4 md:px-8 md:py-8 lg:px-16 xl:px-24">
      <div className="flex md:hidden justify-between w-full">
        <Link className="flex items-center space-x-1" href="/">
          <Image src={logo} alt="logo" width={30} height={30} />
          <div className="font-bold text-xl">lunchtrak</div>
        </Link>
        <button>
          <FiMenu size={24} />
        </button>
      </div>
      <div className="hidden md:flex w-full justify-between">
        <Link className="flex items-center space-x-1" href="/">
          <Image src={logo} alt="logo" width={30} height={30} />
          <div className="font-bold text-xl">lunchtrak</div>
        </Link>
        <div className="flex items-center justify-center space-x-3">
          <div className="">About</div>
          <BsDot />
          <div className="">Contact</div>
          <BsDot />
          <div className="">Blog</div>
          <BsDot />
          <div className="">Pricing</div>
        </div>
        <button className="bg-black rounded-full py-1 px-4 text-sm text-white font-bold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
