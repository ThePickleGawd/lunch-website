import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";

import { benefitOne, benefitTwo } from "../components/Data";
import Video from "../components/Video";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Cta from "../components/CTA";
import Faq from "../components/FAQ";
import PopupWidget from "../components/PopupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>LunchTrak - No More Waiting For Food</title>
        <meta
          name="description"
          content="LunchTrak helps you avoid long school lunch lines through automatic, wireless check-in."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle pretitle="LunchTrak Benefits" title="Why use LunchTrak?">
        Lunch is extremely important for high school students to explore clubs
        and attend school events. LunchTrak helps avoid the boring wait times
        and gets you to your activites faster
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
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
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
};

export default Home;
