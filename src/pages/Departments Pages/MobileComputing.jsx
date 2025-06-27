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
            الحوسبة المتنقلة و تطبيقات الأجهزة الذكية
          </h1>
          <p className="text-gray-800 text-xl max-md:text-lg max-xs:text-base">
            مع انتشار الهواتف الذكية والتطبيقات المحمولة، أصبح هذا التخصص
            ضروريًا لمواكبة التطور السريع في هذا المجال. يتعلم الطلاب في هذا
            القسم برمجة تطبيقات الهواتف الذكية
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
              المسارات الدراسية لقسم الحوسبة المتنقلة و تطبيقات الأجهزة الذكية
            </h3>
            <p className="my-2 ">
              يركّز قسم الحوسبة المتنقلة على تزويد الطلاب بالمعرفة والمهارات
              اللازمة لتصميم وتطوير تطبيقات الهواتف الذكية والأجهزة المحمولة.
              يجمع هذا التخصص بين البرمجة، تصميم واجهات الاستخدام، وتكامل
              التطبيقات مع التقنيات الحديثة مثل إنترنت الأشياء (IoT) والذكاء
              الاصطناعي.
            </p>
            <ul className="list-decimal mr-5 ">
              <li className="my-2">
                <span className="font-bold">تطوير تطبيقات Android وiOS : </span>
                باستخدام أدوات مثل Flutter، Kotlin، وSwift لتطوير تطبيقات تعمل
                بكفاءة على مختلف الأجهزة.
              </li>
              <li className="my-2">
                <span className="font-bold">
                  تصميم واجهات التطبيقات وتجربة المستخدم :
                </span>
                يركّز على بناء تطبيقات سهلة الاستخدام وجذابة بصريًا.
              </li>
              <li className="my-2">
                <span className="font-bold">
                  تكامل التطبيقات مع قواعد البيانات وAPIs :
                </span>
                تعلم ربط التطبيقات بخدمات الإنترنت وقواعد البيانات لتبادل
                البيانات في الوقت الحقيقي.
              </li>
              <li className="my-2">
                <span className="font-bold">
                  برمجة إنترنت الأشياء (IoT Programming) :
                </span>
                تطوير تطبيقات تتفاعل مع أجهزة ذكية وأجهزة استشعار مدمجة.
              </li>
            </ul>
          </div>
          {/* المهارات المكتسبة  */}
          <div className="my-2">
            <h3 className="text-lg text-cyan-500">
              المهارات المكتسبة خلال الدراسة
            </h3>
            <p className="my-2">
              يُكسب هذا القسم الطالب مجموعة من المهارات العملية التي تؤهله
              لتصميم وتطوير تطبيقات حديثة للأجهزة الذكية، مع فهم عميق لبيئة
              الأنظمة المحمولة واحتياجات المستخدمين في هذا المجال الديناميكي.
            </p>
          </div>
          {/* الوظائف المؤهلة */}
          <div className="my-1">
            <h3 className="text-lg text-cyan-500">
              الوظائف المؤهل لها في سوق العمل
            </h3>
            <p className="my-2">
              نظرًا للطلب المتزايد على تطبيقات الهواتف الذكية، يتمتع خريجو هذا
              القسم بفرص واسعة في سوق العمل، سواء في الشركات التقنية أو عبر
              العمل الحر والمشاريع الخاصة.
            </p>
            <ul className="list-decimal mr-5 ">
              <li className="my-2.5">
                <span className="font-bold">
                  مطور تطبيقات موبايل (Mobile App Developer) :
                </span>
                يطوّر تطبيقات Android وiOS باستخدام Flutter أو تقنيات أصلية مثل
                Kotlin وSwift.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مهندس تجربة المستخدم (UX Engineer) :
                </span>
                يركز على تصميم وتحسين تجربة المستخدم داخل التطبيق.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مطور إنترنت الأشياء (IoT App Developer) :
                </span>
                يطوّر تطبيقات تتكامل مع أجهزة ذكية وأجهزة استشعار.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مختبر تطبيقات موبايل (Mobile App Tester) :
                </span>
                يختبر التطبيقات ويحدّد الأخطاء لتحسين الأداء والاستقرار.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مطور تطبيقات هجينة (Cross-Platform Developer) :
                </span>
                يستخدم أدوات مثل React Native أو Flutter لبناء تطبيقات تعمل على
                عدة أنظمة.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مدير منتج تطبيقات (Mobile Product Manager) :
                </span>
                يدير دورة حياة التطبيق من الفكرة حتى النشر والتحديثات.
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
