import Navigation from "../components/ui/Navigation";
import GlobalThemeContext from "../contexts/ThemeContext";
import "../styles/globals.css";
import "../styles/main.css";
import "../styles/hamburger.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalThemeContext>
      <Navigation />
      <Component {...pageProps} />
    </GlobalThemeContext>
  );
}

export default MyApp;
