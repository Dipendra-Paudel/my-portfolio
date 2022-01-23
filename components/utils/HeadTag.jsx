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
    </Head>
  );
};

export default HeadTag;
