/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import Education from "./components/education";
import Header from "./components/header";
import Hero from "./components/hero";
import Project from "./components/project";
import Skill from "./components/skill";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModePref = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(isDarkModePref);
    if (isDarkModePref) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    console.log(isDarkMode);
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", !isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <>
      <Header onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Hero />
      <Education />
      <Skill />
      <Project />
    </>
  );
}

export default App;
