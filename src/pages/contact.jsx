import { sendContactForm } from "../services/contactService.jsx";
import React, { useState } from "react";

import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message_title: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        message_title: formData.message_title,
        message: formData.message,
      };

      const response = await sendContactForm(payload);
      console.log("📨 تم إرسال الرسالة:", response.data);
      alert("✅ تم إرسال الرسالة!");

      // إعادة تعيين الحقول بعد الإرسال
      setFormData({
        name: "",
        email: "",
        message_title: "",
        message: "",
      });
    } catch (error) {
      console.error("حدث خطأ أثناء الإرسال:", error);
      alert("❌ فشل في الإرسال. حاول لاحقًا.");
    }
  };

  return (
    <div className="">
      <Navbar />
      {/* title  */}
      <div className="my-10">
        <div className=" container m-auto text-center">
          <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl">
            تواصل معنا
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-600  m-auto">
            لا تتردد في الاستفسار و التواصل معنا في اي وقت
          </p>
        </div>
      </div>

      {/* start form  */}
      <div className="container mx-auto mb-15 w-[60%] formBox  ">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12  ">
            <div className=" grid grid-cols-1 gap-x-6 gap-y-8  text-center ">
              {/* Name  */}
              <div className="sm:col-span-5">
                <label
                  htmlFor="first-name"
                  className="block text-xl font-medium text-gray-900"
                >
                  الاسم
                </label>
                <div className="mt-2 w-[40%] m-auto max-2xl:w-[60%] max-lg:w-[80%] max-md:w-[100]">
                  <input
                    id="first-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    autoComplete="given-name"
                    placeholder="ادخل الاسم"
                    className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* Email  */}
              <div className="sm:col-span-5">
                <label
                  htmlFor="email"
                  className="block text-xl font-medium text-gray-900"
                >
                  البريد الالكتروني
                </label>
                <div className="mt-2 w-[40%] m-auto max-2xl:w-[60%] max-lg:w-[80%] max-md:w-[100]">
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    autoComplete="email"
                    placeholder="Example@gmail.com"
                    className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* Message title */}
              <div className="sm:col-span-5">
                <label
                  htmlFor="message_title"
                  className="block text-xl font-medium text-gray-900"
                >
                  عنوان الرسالة
                </label>
                <div className="mt-2 w-[40%] m-auto max-2xl:w-[60%] max-lg:w-[80%] max-md:w-[100]">
                  <input
                    id="message_title"
                    name="message_title"
                    value={formData.message_title}
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    placeholder="ادخل عنوان الرسالة"
                    className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 sm:text-sm/6"
                  />
                </div>
              </div>
              {/* Message  */}
              <div className="sm:col-span-5">
                <label
                  htmlFor="message"
                  className="block text-xl font-medium text-gray-900"
                >
                  الرسالة
                </label>
                <div className="mt-2 w-[40%] m-auto max-2xl:w-[60%] max-lg:w-[80%] max-md:w-[100]">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="لك كامل الاريحية في السؤال و الاستفسار....."
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900 sm:text-sm/6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* buttons  */}
          <div className="mt-6 flex items-center justify-end gap-x-6 ">
            <button
              type="submit"
              className="rounded-md bg-blue-900 m-auto px-10 py-2 text-base font-normal text-white shadow-xs
             hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
      {/* end form  */}

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default Contact;
