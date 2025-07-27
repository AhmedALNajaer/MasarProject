import React, { useState } from "react";
import { addCourseToUser } from "../../services/UserService";

const AddCourseToUser = ({ courseId }) => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState(null);

  const isLoggedIn = () => {
    return !!localStorage.getItem("token");
  };

  const handleClick = () => {
    if (!isLoggedIn()) {
      alert("يرجى تسجيل الدخول أولاً لإضافة الدورة.");
      return;
    }
    setShowModal(true);
  };

  const handleConfirm = async () => {
    setShowModal(false);

    try {
      const response = await addCourseToUser(courseId); // courseId جاي من props
      console.log("✅ الدورة أُضيفت بنجاح:", response);
      // ممكن تعرض رسالة نجاح للمستخدم أو تعمل تحديث لحالة العرض
    } catch (error) {
      console.error("❌ فشل في إضافة الدورة:", error);
      // ممكن تعرض رسالة خطأ للمستخدم
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };
  return (
    <div>
      {/* Add button  */}
      <div className="col-span-1  text-end max-m:text-center max-m:my-1">
        <>
          <button
            onClick={handleClick}
            className="bg-blue-900 text-white py-2 px-3.5 rounded-lg hover:bg-blue-600 transition"
          >
            اضافة لدوراتك
          </button>

          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              {/* الخلفية السوداء الشفافة */}
              {/* <div
                className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
                onClick={handleCancel}
              ></div> */}

              {/* صندوق التأكيد */}
              <div className="relative bg-white p-6 rounded-lg shadow-xl z-60 w-80 text-center">
                <p className="mb-4 text-lg font-semibold">
                  هل أنت جاهز للبدء بهذه الدورة؟
                </p>
                <div className="flex justify-around">
                  <button
                    onClick={handleConfirm}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    نعم
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    ليس الآن
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default AddCourseToUser;
