import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Navbar from "../../components/navbar.jsx";
import UserCourses from "../../components/User/usercourses.jsx";
import Footer from "../../components/footer.jsx";

import { NavLink } from "react-router-dom";

const UserPersonalPage = () => {
  const { state } = useLocation();
  const user = state || {};

  return (
    <div>
      <Navbar />
      {/* start user information details .............. */}
      <div className="bg-amber-700 container mx-auto my-10">
        {/* name and image  */}
        <div className="flex">
          {/* image  */}
          <div className="w-30 h-30 rounded-full bg-amber-200">
            {/* <img src="" alt="" /> */}
          </div>
          {/* name  */}
          <div className="py-7 mr-5">
            <h1 className="my-1 text-2xl font-bold">{user.name}</h1>
            <p className="my-1 text-lg">
              {user.faculty_department_id || "غير محدد"}
            </p>
          </div>
        </div>
      </div>
      {/* end user information details .............. */}

      {/* ...................................... */}

      {/* start user courses ................... */}
      <UserCourses />
      {/* end user courses ................... */}

      <Footer />
    </div>
  );
};

export default UserPersonalPage;
