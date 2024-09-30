/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import Hero from "./components/hero";
import Project from "./components/project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Profile from "./components/profile";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    if (localStorage.getItem("darkMode") != null) {
      const isDarkModePref = localStorage.getItem("darkMode") === "true";
      console.log(isDarkModePref);
      if (isDarkModePref == false) {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
      } else {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    }

    const savedLink = sessionStorage.getItem("activeLink");
    if (savedLink) {
      setActiveLink(savedLink);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode; // Determine the new state
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("darkMode", newDarkModeState); // Update local storage

    // Apply or remove the dark class
    if (newDarkModeState) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleActiveLink = (path) => {
    setActiveLink(path);
    sessionStorage.setItem("activeLink", path);
  };
  return (
    <Router>
      <Navbar
        onToggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        onActiveLink={handleActiveLink}
        activeLink={activeLink}
      />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Profile />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
