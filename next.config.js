module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    FRONTEND_TOKEN: process.env.FRONTEND_TOKEN,
  },
};
