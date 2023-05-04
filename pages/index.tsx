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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LunchTrak - Faster Lunch Lines</title>
        <meta
          name="description"
          content="LunchTrak helps you avoid long school lunch lines through automatic, wireless check-in."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle pretitle="LunchTrak Benefits" title="Why use LunchTrak?">
        Students spend lunch making new friends and exploring their passions.
        With LunchTrak, your school can give back the time students spend in
        boring lines.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle pretitle="Watch a video" title="See LunchTrak in Action">
        Ok you got us... We haven&apos;t actually demoed our tech anywhere. For
        now, watch this totally awesome placeholder video.
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
