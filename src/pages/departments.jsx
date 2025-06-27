import React from "react";
import { NavLink } from "react-router-dom";

import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import CompS from "../assets/images/computer sience.png";

const DepartmentsPage = () => {
  return (
    <div>
      <Navbar />

      {/* start departments articles */}
      <div className="articles my-15">
        <div className="container  w-[50%] m-auto text-center">
          <p className="text-gray-800 text-xl">
            "كل قسم في كلية تكنولوجيا المعلومات يحمل فرصًا وإمكانيات لا حدود
            لها، خذ وقتك في استكشافها، تعرّف على محتواها، واكتشف كيف يمكن لكل
            تخصص أن يفتح لك أبوابًا جديدة نحو مستقبل مهني مميز!"
          </p>
        </div>
        <div className="container m-auto py-3  grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <article className="overflow-hidden rounded-lg shadow-sm my-3 mx-2 transition hover:shadow-lg max-lg:my-2">
            <img alt="" src={CompS} className="h-56 w-full object-cover" />
            <div className="bg-white p-4 h-[100%] sm:p-6">
              <h3 className="mt-0.5 text-lg text-gray-900">قسم علم الحاسوب </h3>
              <p className="my-2 line-clamp-3 text-sm/relaxed text-gray-500">
                يُعد علم الحاسوب الأساس لكل المجالات التقنية، حيث يركز على
                الخوارزميات، وهياكل البيانات، والبرمجة، والذكاء الاصطناعي، وأمن
                المعلومات. إذا كنت مهتمًا ببناء البرمجيات، وتحليل البيانات، أو
                تطوير تقنيات الذكاء الاصطناعي، فهذا المسار هو البداية المثالية
                لك!
              </p>
              <div className="text-center">
                <NavLink
                  to="/computerSience"
                  className={
                    "bg-blue-900 text-white text-md py-1 px-3  mx-auto rounded-lg"
                  }
                >
                  اقرأ المزيد عن القسم....
                </NavLink>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg shadow-sm my-3 mx-2 transition hover:shadow-lg max-lg:my-2">
            <img alt="" src={CompS} className="h-56 w-full object-cover" />
            <div className="bg-white p-4 h-[100%] sm:p-6">
              <h3 className="mt-0.5 text-lg text-gray-900">
                قسم الوسائط المتعددة و تطوير الويب
              </h3>
              <p className="my-2 line-clamp-3 text-sm/relaxed text-gray-500">
                يُعنى هذا القسم بتزويد الطلاب بالمهارات التقنية والإبداعية
                اللازمة لإنشاء محتوى رقمي تفاعلي، وتصميم وتطوير تطبيقات الويب
                الحديثة. يشمل المنهج تقنيات تصميم واجهات المستخدم
              </p>
              <div className="text-center">
                <NavLink
                  to="/multimedia"
                  className="bg-blue-900 text-white text-md py-1 px-3  mx-auto rounded-lg "
                >
                  اقرأ المزيد عن القسم ....
                </NavLink>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg shadow-sm my-3 mx-2 transition hover:shadow-lg max-lg:my-2">
            <img alt="" src={CompS} className="h-56 w-full object-cover" />
            <div className="bg-white p-4 sm:p-6 h-[100%]">
              <h3 className="mt-0.5 text-lg text-gray-900">
                قسم تطوير البرمجيات
              </h3>
              <p className="my-2 line-clamp-3 text-sm/relaxed text-gray-500">
                يُعد هذا القسم من الأقسام الحيوية التي تُركز على تأهيل الطلاب
                لتطوير البرمجيات وأنظمة الحوسبة المختلفة، مع التركيز على مبادئ
                البرمجة الحديثة وهندسة البرمجيات
              </p>
              <div className="text-center">
                <NavLink
                  to="/softwareDevolopment"
                  className="bg-blue-900 text-white text-md py-1 px-3  mx-auto rounded-lg "
                >
                  اقرأ المزيد عن القسم ....
                </NavLink>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg shadow-sm my-3 mx-2 transition hover:shadow-lg max-lg:my-2">
            <img alt="" src={CompS} className="h-56 w-full object-cover" />
            <div className="bg-white p-4 h-[100%] sm:p-6">
              <h3 className="mt-0.5 text-lg text-gray-900">قسم حوسبة الويب</h3>
              <p className="my-2 line-clamp-3 text-sm/relaxed text-gray-500">
                يركز القسم على دراسة وبناء التطبيقات السحابية وتطوير أنظمة الويب
                المتكاملة باستخدام أحدث التقنيات. يكتسب الطلاب معرفة معمقة في
                تطوير مواقع الويب الديناميكية
              </p>
              <div className="text-center">
                <NavLink
                  to="/webCombuting"
                  className="bg-blue-900 text-white text-md py-1 px-3  mx-auto rounded-lg "
                >
                  اقرأ المزيد عن القسم ....
                </NavLink>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg shadow-sm my-3 mx-2 transition hover:shadow-lg max-lg:my-2">
            <img alt="" src={CompS} className="h-56 w-full object-cover" />
            <div className="bg-white p-4 h-[100%] sm:p-6">
              <h3 className="mt-0.5 text-lg text-gray-900">
                قسم نظم تكنولوجيا المعلومات
              </h3>
              <p className="my-2 line-clamp-3 text-sm/relaxed text-gray-500">
                يُركز هذا القسم على إعداد الطلاب لفهم وتصميم وإدارة أنظمة
                المعلومات التي تدعم عمليات المؤسسات والشركات. يشمل المنهج مواضيع
                مثل تحليل وتصميم الأنظمة
              </p>
              <div className="text-center">
                <NavLink
                  to="/informationTechnology"
                  className="bg-blue-900 text-white text-md py-1 px-3  mx-auto rounded-lg "
                >
                  اقرأ المزيد عن القسم ....
                </NavLink>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg shadow-sm my-3 mx-2 transition hover:shadow-lg max-lg:my-2">
            <img alt="" src={CompS} className="h-56 w-full object-cover" />
            <div className="bg-white p-4 h-[100%] sm:p-6">
              <h3 className="mt-0.5 text-lg text-gray-900">
                قسم الحوسبة المتنقلة و تطبيقات الاجهزة الذكية
              </h3>
              <p className="my-2 line-clamp-3 text-sm/relaxed text-gray-500">
                مع انتشار الهواتف الذكية والتطبيقات المحمولة، أصبح هذا التخصص
                ضروريًا لمواكبة التطور السريع في هذا المجال. يتعلم الطلاب في هذا
                القسم برمجة تطبيقات الهواتف الذكية
              </p>
              <div className="text-center">
                <NavLink
                  to="/mobileComputing"
                  className="bg-blue-900 text-white text-md py-1 px-3  mx-auto rounded-lg "
                >
                  اقرأ المزيد عن القسم ....
                </NavLink>
              </div>
            </div>
          </article>
        </div>
      </div>
      {/* end departments articles */}

      <Footer />
    </div>
  );
};

export default DepartmentsPage;
