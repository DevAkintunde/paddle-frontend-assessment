import React, { useEffect } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  //control special styling on footer on comingsoon landing page which isn't available on other pages
  useEffect(() => {
    let footer = document.getElementById("footer");
    if (
      footer &&
      (location.pathname === "/" || location.pathname === "/comingsoon")
    ) {
      if (footer.classList.length === 0) {
        footer.setAttribute(
          "class",
          "bg-gradient-to-t from-color-def/25 to-color-def/10 rounded-t-full max-w-xl mx-auto border-[1px] border-b-0"
        );
      }
    } else if (footer && footer.classList.length !== 0) {
      footer.removeAttribute("class");
    }
  }, [location.pathname]);

  return (
    <footer id="footer">
      <div className="w-fit mx-auto mt-20 sm:pt-10 pb-5 px-10 sm:px-0 text-color-def/50">
        <ul className="grid grid-cols-5 text-xl gap-10 w-fit mx-auto">
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaFacebookSquare className="rounded-lg" />
          </li>
          <li>
            <FaLinkedin className="rounded-lg" />
          </li>
          <li>
            <FaInstagramSquare className="rounded-lg" />
          </li>
          <li>
            <FaTwitterSquare className="rounded-lg" />
          </li>
        </ul>
        <ul className="grid grid-cols-2 place-items-center mt-3 mb-5">
          <li>Terms of services</li>
          <li>Privacy policy</li>
        </ul>
        <p className="text-center">
          Copyright 2022 @{" "}
          <a href="http://github.com/devakintunde">DevAKintunde</a>. All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
