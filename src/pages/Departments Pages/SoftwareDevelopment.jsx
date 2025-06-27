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
            تطوير البرمجيات
          </h1>
          <p className="text-gray-800 text-xl max-md:text-lg max-xs:text-base">
            يُعد هذا القسم من الأقسام الحيوية التي تُركز على تأهيل الطلاب لتطوير
            البرمجيات وأنظمة الحوسبة المختلفة، مع التركيز على مبادئ البرمجة
            الحديثة وهندسة البرمجيات
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
              المسارات الدراسية لقسم تطوير البرمجيات
            </h3>
            <p className="my-2 ">
              يُركّز قسم تطوير البرمجيات على تمكين الطالب من بناء برمجيات
              احترافية تلبي احتياجات المستخدمين والمؤسسات. يتعلم الطالب كيفية
              تحليل المشاكل وصياغتها برمجيًا، وتطوير تطبيقات تعمل بكفاءة على
              مختلف المنصات، مما يجعله عنصرًا أساسيًا في فرق التطوير البرمجي.
            </p>
            <ul className="list-decimal mr-5 ">
              <li className="my-2">
                <span className="font-bold">
                  برمجة التطبيقات (Application Development) :
                </span>
                يشمل تطوير تطبيقات سطح المكتب والموبايل باستخدام لغات مثل Java
                وC# وFlutter.
              </li>
              <li className="my-2">
                <span className="font-bold">
                  هندسة البرمجيات (Software Engineering) :
                </span>
                يتناول منهجيات تطوير البرمجيات، من تحليل المتطلبات وحتى الاختبار
                والنشر.
              </li>
              <li className="my-2">
                <span className="font-bold">
                  تطوير تطبيقات الويب (Web Development) :
                </span>
                يركّز على بناء تطبيقات ومواقع ديناميكية باستخدام تقنيات مثل PHP،
                JavaScript، Laravel، وReact.
              </li>
              <li className="my-2">
                <span className="font-bold">إدارة مشاريع البرمجيات :</span>
                يتعلّم الطالب كيف يخطط وينفّذ مشاريع برمجية باحتراف باستخدام
                أدوات ومنهجيات حديثة مثل Scrum وKanban.
              </li>
            </ul>
          </div>
          {/* المهارات المكتسبة  */}
          <div className="my-2">
            <h3 className="text-lg text-cyan-500">
              المهارات المكتسبة خلال الدراسة
            </h3>
            <p className="my-2">
              يُكسب هذا القسم الطلاب خبرة تقنية عملية في بناء أنظمة برمجية
              متكاملة، ويطوّر مهاراتهم في التفكير المنطقي، حل المشكلات، والعمل
              ضمن فرق تطوير برمجي.
            </p>
          </div>
          {/* الوظائف المؤهلة */}
          <div className="my-1">
            <h3 className="text-lg text-cyan-500">
              الوظائف المؤهل لها في سوق العمل
            </h3>
            <p className="my-2">
              فتح قسم علوم الحاسوب أبوابًا واسعة لسوق العمل، حيث يمكن للخريج
              العمل في شركات التكنولوجيا، والمؤسسات الحكومية، والشركات الناشئة،
              وحتى بشكل مستقل (Freelance). تعتمد مجالات العمل على المهارات التي
              يكتسبها الطالب خلال دراسته، والمسار الذي يختاره للتخصص فيه.
            </p>
            <ul className="list-decimal mr-5 ">
              <li className="my-2.5">
                <span className="font-bold">
                  مطور برمجيات (Software Developer) :
                </span>
                يطوّر تطبيقات برمجية متعددة المنصات لحل مشكلات المستخدمين أو
                تلبية احتياجات الشركات.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مطور تطبيقات موبايل (Mobile App Developer) :
                </span>
                يختص ببناء تطبيقات تعمل على Android وiOS باستخدام تقنيات مثل
                Flutter أو React Native.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مهندس برمجيات (Software Engineer) :
                </span>
                يُخطّط ويُصمّم ويُشرف على تطوير أنظمة برمجية معقدة.
              </li>
              <li className="my-2.5">
                <span className="font-bold">مطور ويب (Web Developer) :</span>
                يبني مواقع وتطبيقات ويب تفاعلية باستخدام تقنيات حديثة.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مهندس ضمان جودة (QA Engineer) :
                </span>
                يختبر البرمجيات ويتأكد من جودتها وأدائها قبل الإطلاق.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مدير مشروع برمجي (Software Project Manager) :
                </span>
                يُدير عمليات تطوير البرمجيات من التخطيط حتى التسليم، ويتابع تقدم
                العمل ضمن فرق التطوير.
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
