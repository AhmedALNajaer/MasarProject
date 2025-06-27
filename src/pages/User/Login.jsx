import React from "react";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
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
          <form className="space-y-6">
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
