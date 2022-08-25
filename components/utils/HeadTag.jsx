import Head from "next/head";

const description =
  "I am a fullstack developer. I build fully responsive and functional websites as well as build backend servers and create api.";

const HeadTag = ({ title, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="keywords"
        content={`${keywords}, Dipendra Paudel, Fullstack developer`}
      />
      <meta name="description" content={description} />
      <meta name="author" content="Dipendra Paudel" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <meta
        property="og:url"
        content="https://gleeful-sunburst-11c795.netlify.app"
      />
      <meta property="og:type" content="portfolio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/profile.jpg" />
    </Head>
  );
};

export default HeadTag;
