import { div } from "framer-motion/client";
import React from "react";
import { NavLink } from "react-router-dom";
import HomeCourses from "../components/courses/HomeCourses";

export default function CoursesSection() {
  return (
    <div className="mainCourses">
      {/* start title  */}
      <div className=" container m-auto text-center">
        <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl">
          أحدث الدورات
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-600  m-auto">
          طوّر مهاراتك واستعد لمستقبلك التقني
        </p>
      </div>
      {/* end title  */}

      <HomeCourses />

      {/* start link button  */}
      <div className=" text-center mt-10">
        <NavLink
          to="/courses"
          className="  bg-blue-900  text-white text-md py-3 px-5  mx-auto rounded-lg "
        >
          مشاهدة جميع الدورات
        </NavLink>
      </div>
      {/* end link button  */}
    </div>
  );
}
