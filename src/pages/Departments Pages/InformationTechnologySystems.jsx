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
            نظم تكنولوجيا المعلومات
          </h1>
          <p className="text-gray-800 text-xl max-md:text-lg max-xs:text-base">
            يُركز هذا القسم على إعداد الطلاب لفهم وتصميم وإدارة أنظمة المعلومات
            التي تدعم عمليات المؤسسات والشركات. يشمل المنهج مواضيع مثل تحليل
            وتصميم الأنظمة
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
              المسارات الدراسية لقسم نظم تكنولوجيا المعلومات
            </h3>
            <p className="my-2 ">
              يركّز قسم نظم تكنولوجيا المعلومات على الدمج بين المهارات التقنية
              والإدارية، حيث يتعلم الطالب كيفية تحليل احتياجات المؤسسات وتصميم
              الأنظمة التكنولوجية المناسبة لها. يهيئ هذا القسم الطالب ليكون حلقة
              الوصل بين الجانب التقني والجانب الإداري في بيئة العمل.
            </p>
            <ul className="list-decimal mr-5 ">
              <li className="my-2">
                <span className="font-bold">تحليل وتصميم الأنظمة : </span>
                يركّز على دراسة احتياجات الأعمال وتصميم حلول تكنولوجية تلبي هذه
                الاحتياجات بفعالية.
              </li>
              <li className="my-2">
                <span className="font-bold">إدارة قواعد البيانات :</span>
                يهتم بتصميم وإدارة قواعد البيانات وضمان أمنها وسرعة الوصول إلى
                البيانات.
              </li>
              <li className="my-2">
                <span className="font-bold">
                  إدارة مشاريع تقنية المعلومات :{" "}
                </span>
                يُدرّب الطالب على تخطيط وتنفيذ ومتابعة مشاريع تكنولوجيا
                المعلومات وفقًا لمعايير احترافية.
              </li>
              <li className="my-2">
                <span className="font-bold">
                  البنية التحتية لتقنية المعلومات والشبكات :
                </span>
                يغطّي تصميم ودعم البنية التحتية التقنية للمؤسسات، بما يشمل
                الشبكات والخوادم.
              </li>
            </ul>
          </div>
          {/* المهارات المكتسبة  */}
          <div className="my-2">
            <h3 className="text-lg text-cyan-500">
              المهارات المكتسبة خلال الدراسة
            </h3>
            <p className="my-2">
              يُكسب هذا القسم الطالب مجموعة من المهارات التي تجمع بين الفهم
              التقني العميق والقدرة على التخطيط والإدارة، مما يجعله مؤهلًا لفهم
              مشاكل العمل وتقديم حلول تكنولوجية عملية وفعالة.
            </p>
          </div>
          {/* الوظائف المؤهلة */}
          <div className="my-1">
            <h3 className="text-lg text-cyan-500">
              الوظائف المؤهل لها في سوق العمل
            </h3>
            <p className="my-2">
              يُعتبر قسم نظم تكنولوجيا المعلومات من أكثر الأقسام طلبًا في سوق
              العمل، حيث يمكن للخريج العمل في القطاعات المختلفة لتطوير ودعم
              الأنظمة التقنية التي تعتمد عليها المؤسسات في أعمالها اليومية.
            </p>
            <ul className="list-decimal mr-5 ">
              <li className="my-2.5">
                <span className="font-bold">محلل نظم (Systems Analyst) :</span>
                مسؤول عن دراسة احتياجات الأعمال وتقديم حلول تقنية فعالة.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مدير مشروع تقني (IT Project Manager) :
                </span>
                يُشرف على تنفيذ المشاريع التقنية من البداية حتى التسليم ضمن
                الوقت والميزانية.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مدير قواعد بيانات (Database Administrator) :{" "}
                </span>
                يتولى إدارة وصيانة وتأمين قواعد البيانات في المؤسسات.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مسؤول شبكات ودعم فني (Network & IT Support Specialist) :
                </span>
                يدير البنية التحتية للشبكات ويقدم الدعم الفني للمستخدمين.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مستشار أنظمة ERP (ERP Consultant) :
                </span>
                يساعد المؤسسات على تهيئة وتشغيل أنظمة تخطيط الموارد بكفاءة.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  أخصائي تكامل الأنظمة (Systems Integration Specialist) :
                </span>
                يعمل على ربط الأنظمة المختلفة لتعمل بشكل موحّد داخل المؤسسة.
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
