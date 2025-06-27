import React, { useState } from 'react';
import api from '../API/axios'; // ملف axios اللي جهزناه

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/contact', formData);
      console.log('✔️ الرد من Mirage:', response.data);
    } catch (error) {
      console.error('❌ خطأ أثناء الإرسال:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="الاسم" onChange={handleChange} />
      <input name="email" placeholder="البريد" onChange={handleChange} />
      <input name="subject" placeholder="العنوان" onChange={handleChange} />
      <textarea name="message" placeholder="الرسالة" onChange={handleChange}></textarea>
      <button type="submit">إرسال</button>
    </form>
  );
}

export default ContactForm;
