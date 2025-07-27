import { Routes, Route } from "react-router-dom";
import React from "react";

// Pages & Components
import LandingPage from "./pages/LandingPage.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Departments from "./pages/departments.jsx";
import Department from "./pages/department.jsx";
import Courses from "./pages/courses.jsx";
import SingleCourse from "./pages/singleCourse.jsx";
import ProtectedAdminRoute from "./utils/ProtectedAdminRoute.jsx";
import Dashboard from "./pages/Admin/Dashboard.jsx";
import AdminLogin from "./pages/Admin/AdminLogin.jsx";
import SigninPage from "./pages/User/Login.jsx";
import SignupPage from "./pages/User/Signup.jsx";
import UserPersonalPage from "./pages/User/userPersonalPage.jsx";
import Loding from "./components/common/Loading.jsx";
// import forgetPasswordPage from "./pages/User/ForgetPasswordPage.jsx";

import ComputerSiencePage from "./pages/Departments Pages/ComputerScience.jsx";
import InformatioTechnologyPage from "./pages/Departments Pages/InformationTechnologySystems.jsx";
import MobileComputing from "./pages/Departments Pages/MobileComputing.jsx";
import Multimedia from "./pages/Departments Pages/MultimediaAndWebDevelopment.jsx";
import SoftwareDevelopment from "./pages/Departments Pages/SoftwareDevelopment.jsx";
import WebComputing from "./pages/Departments Pages/WebComputing.jsx";

const App = () => {
  return (
    <div dir="rtl">
      <Routes>
        {/* General Pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/department" element={<Department />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/loading" element={<Loding />} />

        {/* Department Pages */}
        <Route path="/computerSience" element={<ComputerSiencePage />} />
        <Route
          path="/informationTechnology"
          element={<InformatioTechnologyPage />}
        />
        <Route path="/mobileComputing" element={<MobileComputing />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/softwareDevolopment" element={<SoftwareDevelopment />} />
        <Route path="/webCombuting" element={<WebComputing />} />

        {/* Admin Routes */}
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <Dashboard />
            </ProtectedAdminRoute>
          }
        />

        {/* User Routes */}
        <Route path="/login" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user/personal" element={<UserPersonalPage />} />
        {/* <Route path="/forgetPassword" element={<forgetPasswordPage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
