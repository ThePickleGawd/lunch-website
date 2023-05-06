import Head from "next/head";

const Metadata = () => {
  return (
    <Head>
      <title>LunchTrak - Faster Lunch Lines</title>
      <meta
        name="description"
        content="Save valuable lunch time and get to your clubs early with our LunchTrak's automatic check in technology. Our innovative product streamlines the lunch line process through wireless tags, making lines faster and more convenient for students and staff."
      />
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="UTF-8" />
      <meta
        name="keywords"
        content="lunch line, wireless tags, automatic scanning, convenience, time-saving, student clubs, LunchTrak"
      />
      <meta name="author" content="LunchTrak LLC" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="LunchTrak - Faster Lunch Lines" />
      <meta
        property="og:description"
        content="Save valuable lunch time and get to your clubs early with our LunchTrak's automatic check in technology. Our innovative product streamlines the lunch line process through wireless tags, making lines faster and more convenient for students and staff."
      />
      <meta
        property="og:image"
        content="https://www.lunchtrak.com/img/LunchTrakHero.png"
      />
      <meta property="og:url" content="https://www.lunchtrak.com" />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default Metadata;
