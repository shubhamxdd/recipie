import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipie from "./Recipie";
import { Routes, Route } from "react-router-dom";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:search" element={<Searched />} />
      <Route path="/recipie/:name" element={<Recipie />} />
    </Routes>
  );
};

export default Pages;
