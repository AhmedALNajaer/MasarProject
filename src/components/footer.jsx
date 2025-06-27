import { div } from "framer-motion/client";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/white logo.png";
import Departments from "../pages/departments.jsx";

export default function Footer() {
  return (
    <div className="MainFooter bg-blue-900 px-30 pt-10 ">
      <div className="grid grid-cols-2 max-sm:grid-cols-1">
        <div className="logo ">
          <img
            alt="logo"
            src={logo}
            className="h-80 w-auto max-lg:h-60 max-sm:h-40"
          />
        </div>
        {/* links ............. */}
        <div className="links  ">
          <div className="grid grid-cols-2 max-sm:grid-cols-1">
            <ul className="">
              <li className="my-3">
                <NavLink
                  to="/"
                  className="text-white text-xl hover:text-2xl duration-300 ease-in-out max-lg:text-base"
                >
                  {" "}
                  الرئيسية
                </NavLink>
              </li>
              <li className="my-3">
                <NavLink
                  to="/Departments"
                  className="text-white text-xl hover:text-2xl duration-300 ease-in-out max-lg:text-base"
                >
                  {" "}
                  أقسام الكلية
                </NavLink>
              </li>
              <li className="my-3">
                <NavLink
                  to="*"
                  className="text-white text-xl hover:text-2xl duration-300 ease-in-out max-lg:text-base"
                >
                  {" "}
                  اخر المقالات
                </NavLink>
              </li>
              <li className="my-3">
                <NavLink
                  to="*"
                  className="text-white text-xl hover:text-2xl duration-300 ease-in-out max-lg:text-base"
                >
                  {" "}
                  الدورات
                </NavLink>
              </li>
            </ul>
            <ul className="">
              <li className="my-3">
                <NavLink
                  to="/about"
                  className="text-white text-xl hover:text-2xl duration-300 ease-in-ou max-lg:text-base"
                >
                  {" "}
                  من نحن
                </NavLink>
              </li>
              <li className="my-3">
                <NavLink
                  to="/contact"
                  className="text-white text-xl hover:text-2xl duration-300 ease-in-ou max-lg:text-base"
                >
                  {" "}
                  تواصل معنا
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* start rights  */}
      <div className="  w-[100%] text-center">
        <p className="m text-white text-lg max-lg:text-base max-md:text-sm">
          جميع الحقوق محفوظة لصالح منصة مسار © 2025
        </p>
      </div>
    </div>
  );
}
