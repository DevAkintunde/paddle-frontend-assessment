import React from "react";
import { Link } from "react-router-dom";

export const MainNav = () => {
  return (
    <nav className="block text-right uppercase text-[10px] font-semibold py-3 mb-10">
      <ul className="flex gap-3 place-content-end">
        <li>
          <Link className="rounded-full block py-1 px-4" to="about-us">
            About Us
          </Link>
        </li>
        <li>
          <Link className="rounded-full block py-1 px-4" to="blog">
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="bg-color-sec rounded-full block py-1 px-4"
            to="contact-us"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};
