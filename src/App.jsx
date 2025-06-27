import { Routes, Route } from "react-router-dom";
import React from "react";
// main pages and components ....................................................................................
// import Test from './pages/testing.jsx'
// import HomePage from './pages/home.jsx'
// import College from './pages/CollegeDepPage.jsx'
// import Header from './components/header.jsx'
// import Welcome from './components/welcome.jsx'
// import Whyus from './components/whyus.jsx'
// import Departments from './components/College departments.jsx'
// import Courses from './components/Courses.jsx'
// import Question from './components/q&a.jsx'
// import Footer from './components/footer.jsx'
// ..........................................................................................................

import LandingPage from "./pages/LandingPage.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Departments from "./pages/departments.jsx";
import Department from "./pages/department.jsx";
import Courses from "./pages/courses.jsx";
import SingleCourse from "./pages/singleCourse.jsx";
import Dashboard from "./pages/Admin/Dashboard.jsx";

import ComputerSiencePage from "./pages/Departments Pages/ComputerScience.jsx";
import InformatioTechnologyPage from "./pages/Departments Pages/InformationTechnologySystems.jsx";
import MobileComputing from "./pages/Departments Pages/MobileComputing.jsx";
import Multimedia from "./pages/Departments Pages/MultimediaAndWebDevelopment.jsx";
import SoftwareDevelopment from "./pages/Departments Pages/SoftwareDevelopment.jsx";
import WebComputing from "./pages/Departments Pages/WebComputing.jsx";
import SigninPage from "./pages/User/Login.jsx";
import SignupPage from "./pages/User/Signup.jsx";
import UserPersonalPage from "./pages/User/userPersonalPage.jsx";
import Loding from "./components/common/Loading.jsx"
// import forgetPasswordPage from "./pages/User/ForgetPasswordPage.jsx";
const App = () => {
  return (
    <div>
      <div dir="rtl" className="">
        {/* <Header/>
        <Welcome/>
        <Whyus/>
        <Departments/>
        <Courses/>
        <Question/>
        <Footer/> */}
        {/* <HomePage/> */}
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/departments" element={<Departments />}></Route>
          <Route path="/department" element={<Department />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          {/* <Route path="/singleCourses" element={<SingleCourses />}></Route> */}
          <Route path="/courses/:id" element={<SingleCourse />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/loding" element={<Loding />}></Route>

          {/* <Route path='*' element={<Test />}></Route> */}
          {/* <Route path="/College" element={<College/>}></Route> */}
        </Routes>
        {/* departments routes ......... */}
        <Routes>
          <Route
            path="/computerSience"
            element={<ComputerSiencePage />}
          ></Route>
          <Route
            path="/informationTechnology"
            element={<InformatioTechnologyPage />}
          ></Route>
          <Route path="/mobileComputing" element={<MobileComputing />}></Route>
          <Route path="/multimedia" element={<Multimedia />}></Route>
          <Route
            path="/softwareDevolopment"
            element={<SoftwareDevelopment />}
          ></Route>
          <Route path="/webCombuting" element={<WebComputing />}></Route>
        </Routes>
        {/* user routes .............. */}
        <Routes>
          <Route
            path="/userPersonalPage"
            element={<UserPersonalPage />}
          ></Route>
          <Route path="/login" element={<SigninPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route
            path="/forgetPassword"
            element={<forgetPasswordPage />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
