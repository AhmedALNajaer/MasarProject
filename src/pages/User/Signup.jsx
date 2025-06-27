import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../services/UserService";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    faculty_department_id: "",
    email: "",
    password: "",
    gender: "",
  });
  // const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await registerUser(formData);
      console.log("تم:", newUser);
      setSuccess(true);
    } catch (error) {
      console.error("فشل تسجيل الحساب:", error);
      alert("فشل إنشاء الحساب، تأكد من البيانات.");
    }
  };

  return (
    <div className=" h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
        {/* title........................  */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="Your Company" src={Logo} className="mx-auto h-25 w-auto" />
          <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-gray-900">
            انشاء حساب جديد
          </h2>
        </div>
        {/* form ............................... */}
        <div className="  mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name ................................. */}
            <div className="">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-900"
              >
                الاسم كامل
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="أدخل اسمك كاملا هنا "
                  className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 sm:text-sm/6"
                />
              </div>
            </div>
            {/* faculty department ........................ */}
            <div className="mb-4">
              <label
                htmlFor="faculty_department_id"
                className="block text-lg font-medium text-gray-900"
              >
                القسم
              </label>
              <select
                name="faculty_department_id"
                className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 sm:text-sm/6"
                value={formData.faculty_department_id}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    faculty_department_id: e.target.value,
                  })
                }
              >
                <option value="">اختر قسمك</option>
                <option value="1">علوم الحاسوب</option>
                <option value="2">تطوير البرمجيات</option>
                <option value="3">حوسبة الويب</option>
                <option value="3">نظم تكنولوجيا المعلومات</option>
                <option value="3">
                  الحوسبة المتنقلة و تطبيقات الاجهزة الذكية
                </option>
                <option value="3">الوسائط المتعددة</option>
                {/* أضف باقي الأقسام حسب ما عندك */}
              </select>
              {/* <input
                type="number"
                id="faculty_department_id"
                name="faculty_department_id"
                value={formData.faculty_department_id}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    faculty_department_id: e.target.value,
                  })
                }
                className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 sm:text-sm/6"
                required
              /> */}
            </div>
            {/* gender ................................. */}
            <div className="">
              <label
                htmlFor="gender"
                className="block text-lg font-medium text-gray-900"
              >
                الجنس
              </label>
              {/* radio inputs ....................... */}
              <div className="mt-2 flex ">
                <div className="flex items-center ml-10 ">
                  <input
                    id="male"
                    type="radio"
                    value="male"
                    name="gender"
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>
                  <label
                    htmlFor="male"
                    className="ms-2 text-base font-medium text-gray-900"
                  >
                    ذكر
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="female"
                    type="radio"
                    value="female"
                    name="gender"
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  ></input>
                  <label
                    htmlFor="female"
                    className="ms-2 text-base font-medium text-gray-900"
                  >
                    أنثى
                  </label>
                </div>
              </div>
            </div>
            {/* Email ................................ */}
            <div className="">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-900"
              >
                البريد الالكتروني
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  autoComplete="email"
                  placeholder="أدخل بريدك الالكتروني "
                  className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 sm:text-sm/6"
                />
              </div>
            </div>
            {/* password ............................. */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg font-medium text-gray-900"
                >
                  كلمة السر
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  autoComplete="current-password"
                  placeholder="كلمة السر"
                  className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 sm:text-sm/6"
                />
              </div>
            </div>
            {/* button ................................ */}
            <div>
              <button
                type="submit"
                className="flex w-[60%] m-auto justify-center rounded-xl bg-blue-900 px-3 py-3 text-lg font-semibold text-white shadow-xs hover:bg-blue-700 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                انشاء حساب
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            لديك حساب بالفعل؟{" "}
            <NavLink
              to="/login"
              className="font-semibold text-blue-900 hover:text-blue-600 transition"
            >
              سجل الدخول
            </NavLink>
          </p>
        </div>
        {success && (
          <div className="p-4 bg-green-100 border border-green-300 rounded shadow-md mt-4 text-center">
            <p className="text-green-800 font-semibold mb-2">
              تم تسجيل الحساب بنجاح!
            </p>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={() => navigate("/userPersonalPage")}
            >
              الانتقال إلى صفحتك الشخصية
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
