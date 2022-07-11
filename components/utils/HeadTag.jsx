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
      <meta property="og:url" content="http://www.test-domain.com" />
      <meta property="og:type" content="portfolio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content="Portfolio of Dipendra Paudel" />
      <meta
        property="og:image"
        content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
      />
    </Head>
  );
};

export default HeadTag;
