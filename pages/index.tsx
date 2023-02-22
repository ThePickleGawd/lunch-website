import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/shared/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LunchTrak Landing Page</title>
        <meta name="description" content="LunchTrak Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="w-screen px-4 py-10">
        <div>
          <div className="px-4">
            <div className="text-3xl text-primary-dark font-bold text-center">
              Stop waiting so long for lunch.
            </div>
            <div className="hidden md:block">
              <div>
                Replace slow keypads and scanners with automatic student ID
                detection
              </div>
              <button className="font-bold">Learn More</button>
            </div>
          </div>
          <div className="w-full px-16 mt-8">
            <div className="bg-primary rounded-3xl w-full h-64 text-center font-bold text-white text-xl py-8">
              LunchTrak
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
