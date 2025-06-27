import React from "react";

import Navbar from "../../components/navbar.jsx";
import Footer from "../../components/footer.jsx";
import CompS from "../../assets/images/computer sience.png";
import { NavLink } from "react-router-dom";

const DepartmentPage = () => {
  return (
    <div>
      <Navbar />

      {/* start title  */}
      <div>
        <div className="container my-5 mx-auto text-center  p-5">
          <h1 className="text-3xl font-bold my-5 max-md:text-2xl max-xs:text-xl">
            حوسبة الويب
          </h1>
          <p className="text-gray-800 text-xl max-md:text-lg max-xs:text-base">
            يركز القسم على دراسة وبناء التطبيقات السحابية وتطوير أنظمة الويب
            المتكاملة باستخدام أحدث التقنيات. يكتسب الطلاب معرفة معمقة في تطوير
            مواقع الويب الديناميكية
          </p>
        </div>
      </div>
      {/* end title  */}

      {/* start icons  */}
      <div className="container m-auto  py-3 px-5 flex justify-between ">
        <div className="">
          <div className="image w-30 h-30 bg-blue-600 rounded-full m-auto max-lg:w-25 max-lg:h-25 max-xs:w-15 max-xs:h-15"></div>
          <div className="text-center my-1">
            <h3 className="text-lg">المسار الدراسي</h3>
          </div>
        </div>

        <div className="">
          <div className="image w-30 h-30 bg-blue-600 rounded-full m-auto max-lg:w-25 max-lg:h-25 max-xs:w-15 max-xs:h-15"></div>
          <div className="text-center my-1">
            <h3 className="text-lg">المهارات المكتسبة</h3>
          </div>
        </div>

        <div className=" ">
          <div className="image w-30 h-30 bg-blue-600 rounded-full m-auto max-lg:w-25 max-lg:h-25 max-xs:w-15 max-xs:h-15"></div>
          <div className="text-center my-1">
            <h3 className="text-lg">الوظائف المؤهل لها</h3>
          </div>
        </div>

        <div className=" ">
          <div className="image w-30 h-30 bg-blue-600 rounded-full m-auto max-lg:w-25 max-lg:h-25 max-xs:w-15 max-xs:h-15"></div>
          <div className="text-center my-1">
            <h3 className="text-lg">الدورات المتاحة</h3>
          </div>
        </div>
      </div>
      {/* end icons  */}

      {/* start department details section...............................  */}
      <div className="bg-white container my-10 mx-auto py-10 px-5 rounded-3xl">
        <div>
          {/* مسارات القسم  */}
          <div className="my-1">
            <h3 className="text-lg text-cyan-500">
              المسارات الدراسية لقسم حوسبة الويب
            </h3>
            <p className="my-2 ">
              يركّز قسم حوسبة الويب على تمكين الطالب من تصميم وتطوير تطبيقات ويب
              احترافية من الواجهة الأمامية إلى الخلفية، مع فهم شامل لتقنيات
              الإنترنت والبنية التحتية التي تقوم عليها. يدمج هذا القسم بين
              البرمجة، تصميم واجهات المستخدم، وإدارة البيانات لخلق تجارب استخدام
              عالية الجودة.
            </p>
            <ul className="list-decimal mr-5 ">
              <li className="my-2">
                <span className="font-bold">
                  تطوير الواجهة الأمامية (Front-End Development) :
                </span>
                يهتم ببناء واجهات المستخدم باستخدام HTML, CSS, JavaScript
                وإطارات مثل React وVue.
              </li>
              <li className="my-2">
                <span className="font-bold">
                  تطوير الواجهة الخلفية (Back-End Development) :
                </span>
                يركّز على بناء الخوادم، APIs، وقواعد البيانات باستخدام لغات مثل
                PHP، Node.js، وPython.
              </li>
              <li className="my-2">
                <span className="font-bold">
                  تصميم واجهات وتجربة المستخدم (UI/UX Design) :
                </span>
                يتناول تصميم واجهات جذابة وسهلة الاستخدام تركز على راحة وتجربة
                المستخدم.
              </li>
              <li className="my-2">
                <span className="font-bold">
                  قواعد البيانات وتكاملها مع الويب :
                </span>
                يدرّس الطالب كيفية تصميم وربط قواعد البيانات مع تطبيقات الويب
                بشكل ديناميكي وآمن.
              </li>
            </ul>
          </div>
          {/* المهارات المكتسبة  */}
          <div className="my-2">
            <h3 className="text-lg text-cyan-500">
              المهارات المكتسبة خلال الدراسة
            </h3>
            <p className="my-2">
              يكتسب الطالب في هذا القسم مهارات عملية وتقنية متقدمة تؤهله لبناء
              تطبيقات ويب احترافية من الصفر، إضافة إلى فهم عميق للبنية التحتية
              والبيئة التقنية التي تعمل ضمنها تطبيقات الإنترنت.
            </p>
          </div>
          {/* الوظائف المؤهلة */}
          <div className="my-1">
            <h3 className="text-lg text-cyan-500">
              الوظائف المؤهل لها في سوق العمل
            </h3>
            <p className="my-2">
              يفتح قسم حوسبة الويب أبوابًا واسعة للعمل في مجالات تطوير مواقع
              وتطبيقات الإنترنت، والتي أصبحت جزءًا أساسيًا من جميع القطاعات، مما
              يجعل هذا التخصص من أكثر التخصصات طلبًا في سوق العمل الرقمي.
            </p>
            <ul className="list-decimal mr-5 ">
              <li className="my-2.5">
                <span className="font-bold">
                  مطور واجهة أمامية (Front-End Developer) :
                </span>
                يبني صفحات ومكونات تفاعلية باستخدام HTML, CSS, JavaScript.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مطور واجهة خلفية (Back-End Developer) :
                </span>
                يطور الخوادم وقواعد البيانات ويكتب APIs لتشغيل التطبيق.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مطور ويب متكامل (Full-Stack Developer) :
                </span>
                يجمع بين الواجهة الأمامية والخلفية لبناء تطبيق ويب متكامل.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مصمم واجهات وتجربة المستخدم (UI/UX Designer) :
                </span>
                يصمّم واجهات جذابة وسهلة الاستخدام تركز على تجربة المستخدم.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  أخصائي أمن تطبيقات الويب (Web Security Specialist) :
                </span>
                يعمل على تأمين تطبيقات الويب ضد الاختراقات والثغرات.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مطور WordPress أو CMS (CMS Developer) :
                </span>
                يطور مواقع باستخدام أنظمة إدارة المحتوى مثل WordPress وJoomla.
              </li>
            </ul>
          </div>
          {/* الدورات المتعلقة به  */}
          <div className="my-1">
            <h3 className="text-lg text-cyan-500">
              الدورات المتاحة لهذا القسم
            </h3>
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى
            </p>

            {/* كروت الدورات  */}

            <div className="flex justify-between mt-5  max-xxs:grid max-xxs:grid-cols-1">
              <div className="transition  hover:scale-105 max-w-sm max-xl:w-[30%] max-xxs:w-[80%] max-xxs:mx-auto">
                <NavLink to="/" className="block ">
                  <div className="aspect-w-2 aspect-h-1 rounded-2xl border shadow overflow-hidden bg-gray-100">
                    <img
                      src={CompS}
                      loading="lazy"
                      className="object-center object-cover"
                    />
                  </div>

                  <div className="p-2 space-y-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="flex-1 text-base font-medium text-gray-900">
                        عنوان الدورة
                      </h3>

                      <span className="mt-1 shrink-0 text-xs inline-flex items-center gap-1">
                        34233
                        <svg
                          className="w-3 h-3 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>

              <div className="transition hover:scale-105 max-w-sm max-xl:w-[30%] max-xxs:w-[80%] max-xxs:mx-auto">
                <NavLink to="/" className="block ">
                  <div className="aspect-w-2 aspect-h-1 rounded-2xl border shadow overflow-hidden bg-gray-100">
                    <img
                      src={CompS}
                      loading="lazy"
                      className="object-center object-cover"
                    />
                  </div>

                  <div className="p-2 space-y-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="flex-1 text-base font-medium text-gray-900">
                        عنوان الدورة
                      </h3>

                      <span className="mt-1 shrink-0 text-xs inline-flex items-center gap-1">
                        34233
                        <svg
                          className="w-3 h-3 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>

              <div className="transition hover:scale-105 max-w-sm max-xl:w-[30%] max-xxs:w-[80%] max-xxs:mx-auto">
                <NavLink to="/" className="block ">
                  <div className="aspect-w-2 aspect-h-1 rounded-2xl border shadow overflow-hidden bg-gray-100">
                    <img
                      src={CompS}
                      loading="lazy"
                      className="object-center object-cover"
                    />
                  </div>

                  <div className="p-2 space-y-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="flex-1 text-base font-medium text-gray-900">
                        عنوان الدورة
                      </h3>

                      <span className="mt-1 shrink-0 text-xs inline-flex items-center gap-1">
                        34233
                        <svg
                          className="w-3 h-3 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end department details section...............................  */}

      <Footer />
    </div>
  );
};

export default DepartmentPage;
