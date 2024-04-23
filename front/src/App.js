import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeContainer from "./components/Home/HomeContainer";

const App = (props) => {
  return (
    <div className="flex flex-row m-0 p-0 w-full h-full">
      <Routes>
        <Route exact path="/" element={<HomeContainer />} />
      </Routes>
    </div>
  );
};

export default App;
