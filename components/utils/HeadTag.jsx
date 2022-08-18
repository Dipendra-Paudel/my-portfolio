import Head from "next/head";

const HeadTag = ({ title, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="keywords"
        content={`${keywords}, Dipendra Paudel, Fullstack developer`}
      />
      <meta name="description" content="Portfolio of Dipendra Paudel" />
      <meta name="author" content="Dipendra Paudel" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="og:url"
        content="https://gleeful-sunburst-11c795.netlify.app"
      />
      <meta property="og:type" content="portfolio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content="Portfolio of Dipendra Paudel" />
      <meta property="og:image" content="/images/profile.jpg" />
    </Head>
  );
};

export default HeadTag;
