import React from "react";
import HomeMain from "./Pages/HomeMain";
import { Route, Routes } from "react-router-dom";
import ProjectPage from "./Pages/ProjectPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeMain />}/>
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </div>
  );
};

export default App;
