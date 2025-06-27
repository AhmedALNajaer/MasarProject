// import axios from "axios";

// export const sendContactForm = async (formData) => {
//   // عدّل الرابط التالي عند توفر API حقيقي من الباك اند
//   const API_URL = "http://127.0.0.1:8000/api/contact"; // ← عدّله لاحقًا
//   return await axios.post(API_URL, formData);
// };

import axios from "axios";

// endpoint لإرسال الرسائل
const SEND_CONTACT_API = "http://127.0.0.1:8000/api/contactfrom";

// endpoint لعرض الرسائل للادمن
const GET_CONTACT_MESSAGES_API = "http://127.0.0.1:8000/api/contact-messages";

// دالة إرسال رسالة من فورم التواصل
export const sendContactForm = async (formData) => {
  return await axios.post(SEND_CONTACT_API, formData);
};

// دالة جلب كل الرسائل (للداشبورد)
export const getContactMessages = async () => {
  return await axios.get(GET_CONTACT_MESSAGES_API);
};
