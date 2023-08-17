import React from "react";
import "./App.css";
import Layout from "./componets/Layout/Layout";
import About from "./pages/About/About";
import TechStack from "./pages/TechStack/TechStack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./componets/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
        <MobileNav/>
        <Layout />

        <div className="container">
          <About />
          <TechStack />
          <Education />

          <Projects />
          <Contact />
        </div>

        <div className="footer pb-3 ms-3">
           <Tada>
          <h4 className="text-center">Made With solankiashok &copy; 2023 </h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
