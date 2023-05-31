import React from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { NextPage } from "next";
import Navbar from "@/components/layout/Navbar";

interface CompanyMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

interface CompanyPageProps {
  members: CompanyMember[];
}

const members: CompanyMember[] = [
  {
    name: "Dylan",
    role: "CEO & Founder",
    image: "/img/logo.svg",
    description: "Dylan is the CEO and Founder of LunchTrak",
  },
];

const CompanyPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="mb-16">work in progress...</div>
        {/* <Image
          src="/img/company/dylan.jpg"
          alt="Dylan"
          width={500}
          height={500}
        /> */}
      </div>
    </>
  );
};

export default CompanyPage;
