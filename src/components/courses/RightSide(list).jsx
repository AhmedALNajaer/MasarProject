import React from "react";

const CourseList = () => {
  return (
    <div className="List h-fit bg-white col-span-1 p-3 rounded-3xl max-lg:order-2 max-lg:mx-auto max-lg:w-[100%] ">
      {/* list title  */}
      <div>
        <h1 className="text-xl">المحتوى </h1>
        <hr class="my-2 border-blue-900 border-1" />
      </div>

      {/* list itself  */}
      <div className="mt-5">
        <ul>
          <li>
            <div className="flex justify-between">
              <h2>عنوان المحتوى</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-blue-900"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr class="my-4 border-blue-900" />
          </li>

          <li>
            <div className="flex justify-between">
              <h2>عنوان المحتوى</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-blue-900"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr class="my-4 border-blue-900" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseList;
