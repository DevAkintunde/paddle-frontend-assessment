import React from "react";
import { Link, NavLink } from "react-router-dom";

export const MainNav = () => {
  return (
    <nav className="block text-right uppercase text-[10px] font-semibold py-3 px-10 mb-10">
      <ul className="flex gap-3 place-content-end">
        <li className="hidden sm:inline-block">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "rounded-full block py-1 px-4 text-pink-500"
                : "rounded-full block py-1 px-4"
            }
            to="comingsoon"
          >
            Coming Soon
          </NavLink>
        </li>
        <li className="hidden sm:inline-block">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "rounded-full block py-1 px-4 text-pink-500"
                : "rounded-full block py-1 px-4"
            }
            to="github"
          >
            Git Api
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "rounded-full block py-1 px-4 text-pink-500"
                : "rounded-full block py-1 px-4"
            }
            to="about-us"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "rounded-full block py-1 px-4 text-pink-500"
                : "rounded-full block py-1 px-4"
            }
            to="blog"
          >
            Blog
          </NavLink>
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
