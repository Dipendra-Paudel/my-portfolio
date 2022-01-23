import { createContext, useContext, useState } from "react";
import "../styles/globals.css";
import "../styles/main.css";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const useTheme = () => useContext(ThemeContext);
export const updateTheme = () => useContext(ThemeUpdateContext);

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemeUpdateContext.Provider value={toggleDarkMode}>
        <Component {...pageProps} />
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
