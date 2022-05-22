import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import ComingSoon from "./pages/ComingSoon";

const PagesRouter = () => {
  //we process all the available pages route here
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="comingsoon" element={<ComingSoon />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="about-us" element={<About />} />
      <Route path="*" element={<Page404 />} />
      {/* <Route path="*" element={<Outlet />} /> */}
    </Routes>
  );
};

export default PagesRouter;
