import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {
  const adminToken = localStorage.getItem("adminToken");

  //  إذا في توكن، يعرض لوحة التحكم
  if (!adminToken) {
    return <Navigate to="/adminLogin" replace />;
  }

  //  إذا في توكن، يعرض لوحة التحكم
  return children;
};

export default ProtectedAdminRoute;
