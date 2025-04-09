import { useState, useEffect } from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { LuMoonStar } from "react-icons/lu";



const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="px-3 text-black cursor-pointer py-1 bg-gray-200 rounded">

      {darkMode ? <LuMoonStar /> : <TiWeatherSunny />}

    </button>
  );
};

export default DarkModeToggle;
