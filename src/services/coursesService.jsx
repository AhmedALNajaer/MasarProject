import axios from "axios";

// قاعدة الرابط الأساسية
const BASE_URL = "http://localhost:8000";

// روابط الـ API
const API_ROUTES = {
  getCourses: "http://localhost:8000/api/courses", // لاستدعاء كل الدورات
  addCourse: "http://localhost:8000/api/courses", // لإضافة دورة
  updateCourse: (id) => `http://localhost:8000/api/courses/${id}`, // تعديل دورة
  deleteCourse: (id) => ` http://localhost:8000/api/courses/${id}`, // حذف دورة
  getCourseById: (id) => `http://localhost:8000/api/courses/${id}`, // لاستدعاء دورة محددة
  // };
};

// كائن courseService يحتوي جميع الدوال
const courseService = {
  // بيانات وهمية (اختبار)
  getAllMockCourses: async () => {
    return [
      {
        id: 1,
        title: "أساسيات التصميم الجرافيكي",
        description: "دورة شاملة للمبتدئين في تصميم الجرافيك.",
        duration: "45 دقيقة",
        number_of_lessons: 7,
        instructor_name: "محمد أبو شعبان",
        image:
          "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=800&q=80",
        videos: ["https://example.com/video1.mp4"],
      },
      {
        id: 2,
        title: "مقدمة في البرمجة",
        description: "تعلم البرمجة بلغة JavaScript من الصفر.",
        duration: "60 دقيقة",
        number_of_lessons: 10,
        instructor_name: "سارة علي",
        image:
          "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=800&q=80",
        videos: ["https://example.com/video2.mp4"],
      },
    ];
  },

  // إرسال دورة جديدة
  addCourse: async (formData) => {
    try {
      const response = await axios.post(API_ROUTES.addCourse, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data?.data || response.data;
    } catch (error) {
      console.error("رسالة الخطأ من السيرفر:", error.response?.data);
      throw error;
    }
  },

  // استدعاء كل الدورات
  getCourses: async (page = 1) => {
    try {
      const response = await axios.get(`${API_ROUTES.getCourses}?page=${page}`);
      console.log("رد الـ API:", response.data);
      // return response.data?.data || response.data;
      return response.data;
    } catch (error) {
      console.error("فشل استدعاء الدورات:", error);
      throw error;
    }
  },

  // تحميل الدورات في البداية أو بعد الإضافة
  fetchCourses: async () => {
    try {
      const courses = await getCourses();
      return courses;
    } catch (error) {
      console.error("خطأ في تحميل الدورات:", error);
      throw error;
    }
  },

  // تعديل دورة
  editCourse: async (id, updatedData) => {
    try {
      updatedData.append("_method", "PUT"); // نحدد نوع العملية
      const response = await axios.post(
        API_ROUTES.updateCourse(id),
        updatedData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("فشل التعديل:", error.response?.data || error.message);
      throw error;
    }
  },

  // حذف دورة
  deleteCourse: async (id) => {
    try {
      const response = await axios.delete(API_ROUTES.deleteCourse(id));
      return response.data?.data || response.data;
    } catch (error) {
      console.error("فشل الحذف:", error);
      throw error;
    }
  },

  // استدعاء دورة واحدة
  getCourseById: async (id) => {
    try {
      const response = await axios.get(API_ROUTES.getCourseById(id));
      const data = response.data;
      console.log("استجابة الدورة:", data);

      return data?.data || data;
    } catch (error) {
      console.error("فشل استدعاء الدورة:", error);
      throw error;
    }
  },

  // جلب دورة واحدة بطريقة fetch
  fetchCourseById: async (id) => {
    try {
      const data = await courseService.getCourseById(id);
      return data;
    } catch (error) {
      console.error("خطأ في جلب الدورة:", error);
      throw error;
    }
  },

  getCourseCount: async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/courses");
      console.log("📦 عدد الدورات (من total):", response.data.total); // ✅
      return response.data.total; // بدل data.length
    } catch (error) {
      console.error("❌ فشل في جلب عدد الدورات:", error);
      return 0;
    }
  },
};

export default courseService;
