import React, { useEffect, useState } from "react";
import courseService from "../../services/coursesService";
import AddCourseToUser from "../../components/common/AddcourcetoUser";

const CourseContent = ({ course, selectedVideo }) => {
  return (
    <div className="Content bg-white col-span-4 rounded-3xl p-5 max-lg:order-1 max-lg:mb-10">
      <div>
        {/* start video section  */}
        <div className="w-[80%] h-140 m-auto rounded-3xl overflow-hidden bg-gray-200">
          {selectedVideo && selectedVideo.video_path ? (
            <video
              className="w-full h-full object-cover rounded-3xl"
              controls
              src={`http://localhost:8000/storage/${selectedVideo.video_path}`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-blue-900 font-semibold text-lg">
              لا يوجد فيديو متاح حاليًا
            </div>
          )}
        </div>
        {/* .................................................. */}

        {/* course details  */}
        <div className="my-5 ">
          {/* description  */}
          <div className="grid grid-cols-4 max-m:grid-cols-1">
            {/* description text  */}
            <div className="col-span-3 ">
              <h2 className="font-bold text-2xl">الوصف</h2>
              <p className="text-xl my-2 max-md:text-lg">
                {course.description_paragraph ||
                  "الوصف غير متوفر الان لهذه الدورة"}
              </p>
            </div>
            {/* Add button  */}
            <AddCourseToUser courseId={course.id} />
            {/* <div className="col-span-1  text-end max-m:text-center max-m:my-1">
              <button className="bg-blue-900 text-white py-2 px-3.5 rounded-lg hover:bg-blue-600 transition">
                اضافة لدوراتك
              </button>
            </div> */}
          </div>

          {/* little details  */}
          <div className="flex justify-between  w-[35%] max-xl:w-[70%] max-md:w-[90%] max-m:w-[100%] max-xxs:grid max-xxs:grid-cols-2">
            {/* teacher  */}
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8 text-blue-900"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>

              <h3 className="mt-1.5 mr-2 ">
                {course.instructor_name || "غير معروف"}
              </h3>
            </div>
            {/* count  */}
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8 text-blue-900"
              >
                <path
                  fillRule="evenodd"
                  d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>

              <h3 className="mt-1.5 mr-2">
                {course.number_of_lessons || " 000"}
              </h3>
            </div>
            {/* time  */}
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8 text-blue-900"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                  clipRule="evenodd"
                />
              </svg>

              <h3 className="mt-1.5 mr-2 text-lg">{course.duration || "00"}</h3>
            </div>
          </div>
        </div>
        {/* .................................................. */}
        <hr className="border-blue-400 border-1 my-5" />
        {/* .................................................. */}

        {/* courese Reviews */}
        <div>
          <div>
            <div className="my-5">
              <h2 className="font-bold text-2xl">التقييمات</h2>
            </div>

            {/* Reviews list  */}
            <div className=" w-[95%] m-auto">
              {/* single Review */}
              <div className="my-5">
                {/* Reviewer and date*/}
                <div className=" flex justify-between">
                  {/* Reviewer ...............................  */}
                  <div className="flex ">
                    {/* image  */}
                    <div className="w-15 h-15 rounded-full bg-blue-900"></div>
                    {/* name and stars  */}
                    <div className="mr-3 py-1">
                      <h3>محمد ابو شعبان</h3>
                      {/* stars ......................................... */}
                      <div className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 text-amber-400 mx-0.3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 text-amber-400 mx-0.3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 text-amber-400 mx-0.3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 text-amber-400 mx-0.3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 text-amber-400 mx-0.3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* date ...................................  */}
                  <div>
                    <time
                      dateTime="2025-05-16"
                      className="text-base text-gray-500"
                    >
                      16 مايو 2025
                    </time>
                  </div>
                </div>
                {/* Review text  */}
                <div className=" my-2">
                  <p>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                    هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                    الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من
                    الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،
                    النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى
                    مفيد لمصممي المواقع على وجه الخصوص،
                  </p>
                </div>
                <hr className="border-blue-100  mt-5" />
              </div>

              {/* single Review */}
              <div className="my-5">
                {/* Reviewer and date*/}
                <div className=" flex justify-between">
                  {/* Reviewer ...............................  */}
                  <div className="flex ">
                    {/* image  */}
                    <div className="w-15 h-15 rounded-full bg-blue-900"></div>
                    {/* name and stars  */}
                    <div className="mr-3 py-1">
                      <h3>محمد ابو شعبان</h3>
                      {/* stars ......................................... */}
                      <div className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 text-amber-400 mx-0.3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 text-amber-400 mx-0.3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 text-amber-400 mx-0.3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 text-amber-400 mx-0.3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 text-amber-400 mx-0.3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* date ...................................  */}
                  <div>
                    <time
                      dateTime="2025-05-16"
                      className="text-base text-gray-500"
                    >
                      16 مايو 2025
                    </time>
                  </div>
                </div>
                {/* Review text  */}
                <div className=" my-2">
                  <p>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                    هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                    الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من
                    الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد،
                    النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى
                    مفيد لمصممي المواقع على وجه الخصوص،
                  </p>
                </div>
                <hr className="border-blue-100  mt-5" />
              </div>
            </div>
          </div>
          {/* .................................................. */}
        </div>
        {/* .................................................. */}
      </div>
    </div>
  );
};

export default CourseContent;
