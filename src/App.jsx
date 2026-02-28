import React from "react";
import HomeMain from "./Pages/HomeMain";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "./Pages/ProjectPage";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </div>
  );
};

export default App;
