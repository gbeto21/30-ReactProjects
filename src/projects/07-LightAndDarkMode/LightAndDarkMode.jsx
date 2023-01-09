import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import { ThemeContext, themes } from "./context/theme-context";

export default function LightAndDarkApp() {
  const [theme, setTheme] = useState(themes.light);

  function changeTheme() {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  useEffect(() => {
    let docBody = document.body;

    switch (theme) {
      case themes.light:
        docBody.classList.remove("bg-dark");
        docBody.classList.remove("text-light");

        docBody.classList.add("bg-light");
        docBody.classList.add("text-dark");
        break;

      case themes.dark:
        docBody.classList.remove("bg-light");
        docBody.classList.remove("text-dark");

        docBody.classList.add("bg-dark");
        docBody.classList.add("text-light");
        break;

      default:
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Blog theme={theme} />
    </ThemeContext.Provider>
  );
}
