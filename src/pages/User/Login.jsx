import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser, getUserProfile } from "../../services/UserService"; // تأكد إن المسار صحيح
import Logo from "../../assets/images/logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const res = await loginUser({ email, password });
      const token = res.token;

      // جلب بيانات المستخدم باستخدام التوكن
      const userData = await getUserProfile(token);

      // 🔐 تخزين التوكن والاسم في localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userName", userData.user.name); // أو userData.full_name حسب هيكل البيانات

      // توجيه المستخدم بعد تسجيل الدخول
      navigate("/user/personal", { state: { user: userData, token } });
    } catch (error) {
      console.log("📛 تفصيل الخطأ:", error);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
      } else if (error.response && error.response.data) {
        // إذا كان هناك رد ولكن بدون رسالة
        setErrorMessage(JSON.stringify(error.response.data));
      } else {
        setErrorMessage("حدث خطأ غير متوقع. الرجاء المحاولة مرة أخرى.");
      }
    }
  };

  return (
    <div className=" h-screen">
      <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {/* title........................  */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="Your Company" src={Logo} className="mx-auto h-30 w-auto" />
          <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-gray-900">
            تسجيل الدخول
          </h2>
        </div>
        {/* form ............................... */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email ................................ */}
            <div>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                <div className="text-sm">
                  <NavLink
                    to="/"
                    className="font-semibold text-blue-900 hover:text-blue-600 transition"
                  >
                    هل نسيت كلمة السر؟
                  </NavLink>
                </div>
              </div>

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                تسجيل الدخول
              </button>
            </div>
            {/* عرض رسالة الخطأ لو موجودة */}
            {errorMessage && (
              <div className="text-center text-red-600 mt-4 font-semibold">
                {errorMessage}
              </div>
            )}
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            طالب جديد؟{" "}
            <NavLink
              to="/signup"
              className="font-semibold text-blue-900 hover:text-blue-600 transition"
            >
              انشاء حساب
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
