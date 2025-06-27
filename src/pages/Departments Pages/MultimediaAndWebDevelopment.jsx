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
            الوسائط المتعددة و تطوير الويب
          </h1>
          <p className="text-gray-800 text-xl max-md:text-lg max-xs:text-base">
            يُعنى هذا القسم بتزويد الطلاب بالمهارات التقنية والإبداعية اللازمة
            لإنشاء محتوى رقمي تفاعلي، وتصميم وتطوير تطبيقات الويب الحديثة. يشمل
            المنهج تقنيات تصميم واجهات المستخدم
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
              المسارات الدراسية لقسم الوسائط المتعددة و تطوير الويب
            </h3>
            <p className="my-2 ">
              يجمع هذا القسم بين الجوانب الفنية والتقنية، حيث يتعلّم الطالب
              كيفية تصميم وتطوير واجهات المستخدم، وبناء المواقع الإلكترونية،
              بالإضافة إلى إنتاج محتوى وسائط متعددة احترافي. تُمكّن هذه المسارات
              الطالب من الإبداع في مجالات التصميم والتطوير الرقمي.
            </p>
            <ul className="list-decimal mr-5 ">
              <li className="my-2">
                <span className="font-bold">إنتاج الوسائط المتعددة : </span>
                يشمل تصميم الجرافيك، تحرير الفيديو، التحريك (Animation)،
                والمؤثرات البصرية.
              </li>
              <li className="my-2">
                <span className="font-bold">
                  تطوير الواجهات الأمامية (Frontend Development) :
                </span>
                يركّز على بناء واجهات المواقع والتطبيقات باستخدام HTML، CSS،
                JavaScript وأطر العمل الحديثة مثل React.
              </li>
              <li className="my-2">
                <span className="font-bold">
                  تطوير الواجهات الخلفية (Backend Development) :
                </span>
                يختص ببناء الخوادم وقواعد البيانات باستخدام لغات مثل PHP،
                Node.js، أو Python.
              </li>
              <li className="my-2">
                <span className="font-bold">
                  تصميم تجربة المستخدم وواجهاته (UI/UX Design) :
                </span>
                يهتم بتصميم واجهات جذابة وسهلة الاستخدام، وتحسين تجربة المستخدم
                في المواقع والتطبيقات.
              </li>
            </ul>
          </div>
          {/* المهارات المكتسبة  */}
          <div className="my-2">
            <h3 className="text-lg text-cyan-500">
              المهارات المكتسبة خلال الدراسة
            </h3>
            <p className="my-2">
              يكتسب الطالب في هذا القسم مزيجًا من المهارات الإبداعية والتقنية،
              تجعله قادرًا على تحويل الأفكار إلى مشاريع رقمية حقيقية. يشمل ذلك
              مهارات التصميم، البرمجة، إدارة المحتوى، والتعامل مع أدوات الإنتاج
              الرقمي.
            </p>
          </div>
          {/* الوظائف المؤهلة */}
          <div className="my-1">
            <h3 className="text-lg text-cyan-500">
              الوظائف المؤهل لها في سوق العمل
            </h3>
            <p className="my-2">
              يؤهل هذا القسم الخريجين للعمل في مجالات متنوعة تشمل التصميم
              الرقمي، تطوير المواقع، إنتاج المحتوى، والتسويق الإلكتروني. كما
              يمكنهم العمل بشكل حر على منصات العمل عن بُعد أو إنشاء مشاريعهم
              الخاصة.
            </p>
            <ul className="list-decimal mr-5 ">
              <li className="my-2.5">
                <span className="font-bold">
                  مصمم واجهات وتجربة مستخدم (UI/UX Designer) :
                </span>
                يبدع في تصميم واجهات المستخدم وتحسين تجربته على المواقع
                والتطبيقات.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مطور واجهات أمامية (Frontend Developer) :
                </span>
                يبني واجهات المواقع باستخدام تقنيات حديثة تركز على الأداء وسهولة
                الاستخدام.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  محرر وسائط متعددة (Multimedia Editor) :{" "}
                </span>
                يعمل على تحرير الفيديوهات، الرسوم المتحركة، والمحتوى البصري
                التفاعلي.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مطور مواقع ويب (Web Developer) :
                </span>
                يطوّر مواقع متكاملة تشمل الجوانب الأمامية والخلفية.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  مصمم جرافيك (Graphic Designer) :
                </span>
                يبتكر عناصر بصرية للتسويق، الهوية البصرية، والمحتوى الرقمي.
              </li>
              <li className="my-2.5">
                <span className="font-bold">
                  أخصائي محتوى رقمي (Digital Content Specialist) :
                </span>
                يُنشئ ويُدير محتوى تفاعلي بصري على المواقع ومنصات التواصل
                الاجتماعي.
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
