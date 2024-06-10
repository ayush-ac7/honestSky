import { useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import { ThemeProvider } from "./contexts/theme";


function App() {
  
  //for state changing while toggling
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change in theme

  useEffect(() => {
    //selecting html tree for updation
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <>
        <Homepage />
      </>
    </ThemeProvider>
  );
}

export default App;
