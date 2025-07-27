import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

const REGISTER_URL = `http://localhost:8000/api/users`;
const LOGIN_URL = `http://localhost:8000/api/user/login`;
const USER_PROFILE_URL = `http://localhost:8000/api/user/profile`;

//  إنشاء حساب جديد
// export const registerUser = async (userData) => {
//   try {
//     const response = await axios.post(REGISTER_URL, userData);
//     const returnedUser = Array.isArray(response.data)
//       ? response.data.find((user) => user.email === userData.email)
//       : response.data.user || response.data.data || response.data;
//     return returnedUser;

//     // return response.data;
//   } catch (error) {
//     console.error("فشل في إنشاء الحساب:", error);
//     console.log(error.response.data);
//     throw error;
//   }
// };
// إنشاء حساب جديد
// export const registerUser = async (userData) => {
//   try {
//     const response = await axios.post(REGISTER_URL, userData);

//     const returnedUser = Array.isArray(response.data)
//       ? response.data.find((user) => user.email === userData.email)
//       : response.data.user || response.data.data || response.data;

//     // ✅ تخزين الـ ID والاسم في localStorage
//     if (returnedUser?.id) {
//       localStorage.setItem("userId", returnedUser.id);
//       localStorage.setItem("userName", returnedUser.name); // لو بدك الاسم للنافبار مثلاً
//     }

//     return returnedUser;
//   } catch (error) {
//     console.error("فشل في إنشاء الحساب:", error);
//     console.log(error.response?.data);
//     throw error;
//   }
// };

// export const registerUser = async (userData) => {
//   try {
//     const response = await axios.post(REGISTER_URL, userData);

//     const user = response.data.user;
//     const token = response.data.token;

//     if (user?.id && token) {
//       localStorage.setItem("userId", user.id);
//       localStorage.setItem("userName", user.name);
//       localStorage.setItem("token", token);
//     }

//     return { user, token };
//   } catch (error) {
//     console.log(error.response?.data?.errors);
//     // console.error("فشل في إنشاء الحساب:", error);
//     throw error;
//   }
// };

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(REGISTER_URL, {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      password_confirmation: userData.password_confirmation, // ✅ مهم جدًا
      gender: userData.gender,
      faculty_department_id: userData.faculty_department_id,
    });

    const user = response.data.user;
    const token = response.data.token;

    if (user?.id && token) {
      localStorage.setItem("userId", user.id);
      localStorage.setItem("userName", user.name);
      localStorage.setItem("token", token);
    }

    return { user, token };
  } catch (error) {
    console.error("فشل في إنشاء الحساب:", error);
    throw error;
  }
};

// export const getUserProfile = async () => {
//   const token = localStorage.getItem("token");
//   return axios
//     .get(USER_PROFILE_URL, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((res) => res.data)
//     .catch((err) => {
//       console.error("❌ فشل في جلب بيانات المستخدم:", err);
//       throw err;
//     });
// };

export const getUserProfile = async () => {
  const token = localStorage.getItem("token");
  console.log("📦 التوكن المستخدم في getUserProfile:", token); // لتتأكد

  try {
    const response = await axios.get(USER_PROFILE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("❌ فشل في جلب بيانات المستخدم:", error);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(LOGIN_URL, userData);
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    console.log("خطأ تم التقاطه:", error);
    console.error("فشل تسجيل الدخول:", error.response?.data || error.message);
    throw error;
  }
};

export const addCourseToUser = async (courseId) => {
  const token = localStorage.getItem("token");
  console.log("📦 التوكن المستخدم في addCourse:", token);

  try {
    const response = await axios.post(
      "http://localhost:8000/api/user/add-course",
      { course_id: courseId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("❌ فشل في إضافة الدورة:", error);
    throw error;
  }
};

export const getUserCount = async () => {
  try {
    const response = await axios.get(REGISTER_URL); // حسب الـ endpoint عندك
    return response.data.length; // بافتراض أن response.data عبارة عن array
  } catch (error) {
    console.error("Error fetching users:", error);
    return 0;
  }
};
