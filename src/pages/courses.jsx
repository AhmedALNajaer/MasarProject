import React, { useEffect, useState } from "react";
import courseService from "../services/coursesService.jsx";

import Navbar from "../components/navbar.jsx";
import CoursesCards from "../components/courses/CoursesCards.jsx";
import Loading from "../components/common/Loading.jsx";
import Footer from "../components/footer.jsx";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});

  const fetchCourses = async (page = 1) => {
    setLoading(true);
    try {
      const response = await courseService.getCourses(page);
      setCourses(response.data);
      setPagination(response);
    } catch (error) {
      console.error("خطأ في تحميل الدورات:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="MainCourses">
      {/* ✅ عرض لودينغ إذا البيانات لسا بتحميل */}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />

          {/* start title */}
          <div>
            <div className="container my-5 mx-auto text-center p-5">
              <h1 className="text-3xl font-bold my-5 max-md:text-2xl max-xs:text-xl">
                دورات مسار
              </h1>
              <p className="text-gray-800 text-xl max-md:text-lg max-xs:text-base">
                كن الأفضل مع دورات تعليمية صممت لإلهامك على منصتنا
              </p>
            </div>
          </div>
          {/* end title */}

          {/* start filter section */}
          <div className="mainFilter container mx-auto">
            <div className="mx-auto w-screen max-w-screen-md max-md:w-[80%]">
              <div className="flex flex-col">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                  <form>
                    <div className="relative mb-5 w-full flex items-center justify-between rounded-md">
                      <svg
                        className="absolute left-2 block h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                      <input
                        type="text"
                        name="search"
                        className="h-12 w-full rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        placeholder="ابحث عن اسم الدورة، اسم المجال.."
                      />
                    </div>

                    <div className="flex justify-around gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      <div className="w-[50%]">
                        <label
                          htmlFor="CourseName"
                          className="text-sm font-medium text-stone-600"
                        >
                          اسم الدورة
                        </label>
                        <input
                          type="text"
                          id="CourseName"
                          placeholder="ادخل الاسم"
                          className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </div>

                      <div className="w-[50%]">
                        <label
                          htmlFor="field"
                          className="text-sm font-medium text-stone-600"
                        >
                          المجال
                        </label>
                        <select
                          id="field"
                          className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        >
                          <option>التصميم الجرافيكي</option>
                          <option>برمجة الويب</option>
                          <option>التصميم ثلاثي الابعاد</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-3 w-full space-x-4">
                      <div className="w-fit mx-auto">
                        <button className="rounded-lg mx-1.5 bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">
                          مسح
                        </button>
                        <button className="rounded-lg mx-1.5 bg-blue-900 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">
                          بحث
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* end filter section */}

          {/* start courses cards */}
          <CoursesCards courses={courses} />
          {/* end courses cards */}

          {/* start pagenation  */}
          <div>
            {/* start pagenation  */}
            <div className="flex justify-center mt-6 gap-2 my-10">
              <button
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                disabled={pagination.current_page === 1}
                onClick={() => fetchCourses(pagination.current_page - 1)}
              >
                «
              </button>

              {Array.from({ length: pagination.last_page }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => fetchCourses(index + 1)}
                  className={`px-3 py-1 rounded ${
                    pagination.current_page === index + 1
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                disabled={pagination.current_page === pagination.last_page}
                onClick={() => fetchCourses(pagination.current_page + 1)}
              >
                »
              </button>
            </div>
          </div>
          {/* end pagenation  */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Courses;
