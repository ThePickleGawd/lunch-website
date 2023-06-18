import Head from "next/head";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";
import SectionTitle from "@/components/home/SectionTitle";

import { benefitOne, benefitTwo } from "@/data/benefits";
import Video from "@/components/home/Video";
import Benefits from "@/components/home/Benefits";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/home/Testimonials";
import Cta from "@/components/home/CTA";
import Faq from "@/components/home/FAQ";
import { NextPage } from "next";
import Metadata from "@/components/layout/Metadata";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionTitle pretitle="LunchTrak Benefits" title="Why use LunchTrak?">
        Students spend lunch making new friends and exploring their passions.
        With LunchTrak, your school can give back the time students spend in
        boring lines.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle pretitle="Watch a video" title="Why Choose LunchTrak?">
        Supercharge your lunch lines so that students can enjoy spending 
        lunch doing what matters: making friends and exploring their passions.
      </SectionTitle>
      <Video />
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials /> */}
      <SectionTitle
        pretitle="FAQ"
        title="Frequently Asked Questions"
      ></SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
