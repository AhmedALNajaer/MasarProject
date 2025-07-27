import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
// import DashboardSidebar from "../../components/Dashboard/DashboardSidebar.jsx"
import DashboardMainOverview from "../../components/Dashboard/DashboardMainOverview .jsx";
import Messages from "../../components/Dashboard/Messages.jsx";
import Courses from "../../components/Dashboard/DashboardCoursesList.jsx";
import Users from "../../components/Dashboard/UsersList.jsx";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");

  // جلب القيمة من localStorage عند تحميل الصفحة
  useEffect(() => {
    const savedPage = localStorage.getItem("activePage");
    if (savedPage) {
      setActivePage(savedPage);
    }
  }, []);

  const handleClick = (page) => {
    setActivePage(page);
    localStorage.setItem("activePage", page);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/adminLogin");
  };

  const renderContent = () => {
    switch (activePage) {
      case "messages":
        return <Messages />;
      case "courses":
        return <Courses />;
      case "users":
        return <Users />;
      case "dashboard":
      default:
        return <DashboardMainOverview onNavigate={handleClick} />;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-[15%] h-screen flex-col justify-between border-e border-gray-100 bg-white max-2xl:w-[25%] max-lg:w-[35%] max-md:w-[45%] max-sm:w-[55%] max-xxs:w-[80%]">
        <div className="px-4 py-6">
          <span className="h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
            <img src={Logo} alt="logo" className="w-[30%]" />
          </span>

          <ul className="mt-6 space-y-1">
            <li>
              <button
                onClick={() => handleClick("dashboard")}
                className={`block w-full text-start rounded-lg px-4 py-2 text-sm font-medium ${
                  activePage === "dashboard"
                    ? "bg-gray-100 text-gray-700"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                اللوحة العامة
              </button>
            </li>

            <li>
              <button
                onClick={() => handleClick("users")}
                className={`block w-full text-start rounded-lg px-4 py-2 text-sm font-medium ${
                  activePage === "users"
                    ? "bg-gray-100 text-gray-700"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                المستخدمون
              </button>
            </li>

            <li>
              <button
                onClick={() => handleClick("courses")}
                className={`block w-full text-start rounded-lg px-4 py-2 text-sm font-medium ${
                  activePage === "courses"
                    ? "bg-gray-100 text-gray-700"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                الدورات
              </button>
            </li>

            <li>
              <button
                onClick={() => handleClick("messages")}
                className={`block w-full text-start rounded-lg px-4 py-2 text-sm font-medium ${
                  activePage === "messages"
                    ? "bg-gray-100 text-gray-700"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                البريد
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full p-6">
        <div>
          {/* باقي محتوى الداشبورد */}

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            تسجيل خروج
          </button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
