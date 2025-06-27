import { NavLink } from "react-router-dom";

const CoursesCards = ({ courses }) => {
  return (
    <div className="CoursesCards container m-auto my-10">
      <div className="grid grid-cols-4 gap-10 max-2xl:grid-cols-3 max-xl:gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {Array.isArray(courses) && courses.length > 0 ? (
          courses.map((course) => (
            <div key={course.id}>
              <NavLink
                to={`/courses/${course.id}`}
                className="block bg-white rounded-lg p-4 shadow-xs shadow-indigo-100"
              >
                {/* صورة الدورة */}
                <img
                  alt={course.title || "اسم الدورة"}
                  src={`http://localhost:8000/storage/${course.image}`}
                  className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2 bg-amber-400">
                  <dl>
                    <div>
                      <dd className="text-sm text-gray-500">جديد</dd>
                    </div>
                    {/* عنوان الدورة */}
                    <div>
                      <dd className="font-medium">{course.title}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 grid grid-cols-2 gap-8 text-xs max-xl:gap-3 max-sm:justify-between">
                    {/* المدة الزمنية */}
                    <div className="sm:inline-flex sm:items-center sm:gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 text-blue-900"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-gray-500">المدة الزمنية</p>
                      <p className="font-medium">{course.duration || "0000"}</p>
                    </div>

                    {/* عدد الدروس */}
                    <div className="sm:inline-flex sm:items-center sm:gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 text-blue-900"
                      >
                        <path d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" />
                      </svg>
                      <p className="text-gray-500">عدد الدروس</p>
                      <p className="font-medium">
                        {course.number_of_lessons || "غير معروف"}
                      </p>
                    </div>

                    {/* اسم المدرس */}
                    <div className="sm:inline-flex sm:items-center sm:gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 text-blue-900"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-gray-500">المدرس</p>
                      <p className="font-medium">
                        {course.instructor_name || "غير معروف"}
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-4">
            لا توجد دورات متاحة حاليًا
          </p>
        )}
      </div>
    </div>
  );
};

export default CoursesCards;
