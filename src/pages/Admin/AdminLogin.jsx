import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_ROUTES from "../../services/apiRoutes";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/admin/login",
        formData
      );

      // ✅ احفظ التوكن في localStorage
      localStorage.setItem("adminToken", response.data.token);

      // ✅ الانتقال إلى لوحة التحكم
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("فشل تسجيل الدخول، تأكد من البيانات.");
    }
  };

  return (
    <div className="h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="شعار الموقع" src={Logo} className="mx-auto h-30 w-auto" />
          <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-gray-900">
            تسجيل دخول المشرف
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="text-red-600 text-center font-semibold">
                {error}
              </div>
            )}

            {/* الاسم */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-900"
              >
                الاسم
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="أدخل اسمك"
                  className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-blue-900"
                />
              </div>
            </div>

            {/* البريد الإلكتروني */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-900"
              >
                البريد الإلكتروني
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="أدخل بريدك الإلكتروني"
                  className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-blue-900"
                />
              </div>
            </div>

            {/* كلمة المرور */}
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-900"
              >
                كلمة المرور
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="كلمة المرور"
                  className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-blue-900"
                />
              </div>
            </div>

            {/* زر الدخول */}
            <div>
              <button
                type="submit"
                className="flex w-[60%] m-auto justify-center rounded-xl bg-blue-900 px-3 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition"
              >
                دخول المشرف
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
