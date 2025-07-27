import React, { useEffect, useState } from "react";
import { getContactMessages } from "../../services/contactService";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const isMock = false; // غيّرها لاحقًا لـ false لما يجهز الباك اند

  useEffect(() => {
    if (isMock) {
      setMessages(mockMessages);
    } else {
      setLoading(true);
      getContactMessages() // ← استخدام الخدمة بدل axios مباشرة
        .then((res) => setMessages(res.data))
        .catch((err) => console.error("فشل في جلب الرسائل:", err))
        .finally(() => setLoading(false));
    }
  }, []);

  // دالة حذف الرسالة (حاليًا وهمية - من state فقط)
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "هل أنت متأكد أنك تريد حذف هذه الرسالة؟"
    );
    if (!confirmDelete) return;

    // حذف وهمي من الواجهة
    setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
  };

  return (
    <div className="MainMessages">
      <div className="MessageHeader">
        <div>
          <h1 className="text-3xl">رسائل المستخدمين</h1>
        </div>
      </div>

      {loading ? (
        <p>جاري تحميل الرسائل...</p>
      ) : messages.length === 0 ? (
        <p>لا توجد رسائل حالياً.</p>
      ) : (
        messages.map((msg) => (
          <div
            className="w-[100%] grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1"
            key={msg.id}
          >
            <div className="bg-white border-2 border-solid border-blue-900 rounded-2xl my-5 p-3">
              {/* message id ...................... */}
              <div className="bg-blue-300 w-[15%] flex justify-between p-2 rounded-xl max-lg:w-[25%] max-md:w-[40%] max-xs:w-[80%]">
                <h1>رقم الرسالة</h1>
                <h1>{msg.id}</h1>
              </div>
              {/* name ............................. */}
              <div className="Name flex">
                <h1 className="ml-7">الاسم :</h1>
                <p>{msg.name}</p>
              </div>
              {/* email .............................. */}
              <div className="Email flex">
                <h1 className="ml-7">البريد الالكتروني :</h1>
                <p>{msg.email}</p>
              </div>
              {/* messageTitle .................... */}
              <div className="messageTitle flex">
                <h1 className="ml-7">عنوان الرسالة :</h1>
                <p>{msg.message_title}</p>
              </div>
              {/* message .................................. */}
              <div className="message flex">
                <h1 className="ml-7">الرسالة :</h1>
                <p>{msg.message}</p>
              </div>
              {/* الأزرار */}
              <div className="flex justify-end mt-4 gap-2">
                <a
                  href={`mailto:${msg.email}?subject=رد على: ${msg.message_title}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
                >
                  رد
                </a>
                <button
                  onClick={() => handleDelete(msg.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
                >
                  حذف
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Messages;
