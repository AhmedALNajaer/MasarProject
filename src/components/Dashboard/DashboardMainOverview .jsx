import React, { useEffect, useState } from "react";
import { getUserCount } from "../../services/UserService.jsx";
import courseService from "../../services/coursesService.jsx";

const DashboardMainOverview = ({ onNavigate }) => {
  const [userCount, setUserCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      const count = await getUserCount();
      setUserCount(count);
    };
    const fetchCourseCount = async () => {
      const count = await courseService.getCourseCount();
      setCourseCount(count);
    };

    fetchUserCount();
    fetchCourseCount();
  }, []);

  return (
    <div className="my-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* عدد المستخدمين */}
      <div className="bg-white p-5 rounded-2xl shadow flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            المستخدمون
          </h2>
          <p className="text-4xl font-bold text-gray-700">
            {userCount} مستخدم مسجل
          </p>
        </div>
        <button
          onClick={() => onNavigate("users")}
          className="mt-4 text-sm text-blue-600 hover:underline self-start"
        >
          عرض الجميع →
        </button>
      </div>

      {/* عدد الدورات */}
      <div className="bg-white p-5 rounded-2xl shadow flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-blue-900 mb-2">الدورات</h2>
          <p className="text-4xl font-bold text-gray-700">
            {courseCount} دورات مرفوعة
          </p>
        </div>
        <button
          onClick={() => onNavigate("courses")}
          className="mt-4 text-sm text-blue-600 hover:underline self-start"
        >
          عرض الجميع →
        </button>
      </div>

      {/* آخر رسالتين */}
      <div className="bg-white p-5 rounded-2xl shadow flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-blue-900 mb-4">
            أحدث الرسائل
          </h2>
          <ul className="text-sm text-gray-700 space-y-3">
            <li>
              <p className="font-medium">
                محمد: لدي استفسار عن الدورة الفلانية
              </p>
              <span className="text-gray-500 text-xs">قبل 3 ساعات</span>
            </li>
            <li>
              <p className="font-medium">آية: أواجه مشكلة في التسجيل</p>
              <span className="text-gray-500 text-xs">قبل يوم واحد</span>
            </li>
          </ul>
        </div>
        <button
          onClick={() => onNavigate("messages")}
          className="mt-4 text-sm text-blue-600 hover:underline self-start"
        >
          عرض الجميع →
        </button>
      </div>
    </div>
  );
};

export default DashboardMainOverview;
