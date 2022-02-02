import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const useTheme = () => useContext(ThemeContext);
export const updateTheme = () => useContext(ThemeUpdateContext);

const GlobalThemeContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleDarkMode = () => {
    const mode = !darkMode;
    localStorage.setItem("darkMode", mode);
    setDarkMode(mode);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("darkMode");
    if (
      localTheme !== false &&
      localTheme !== true &&
      localTheme !== "false" &&
      localTheme !== "true"
    ) {
      localStorage.setItem("darkMode", false);
    } else {
      setDarkMode(String(localTheme) === "true" ? true : false);
      localStorage.setItem("darkMode", false);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(darkMode);

  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemeUpdateContext.Provider value={toggleDarkMode}>
        <div className={darkMode ? "dark" : "light"}>{children}</div>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export default GlobalThemeContext;
