import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const REGISTER_URL = `https://jsonplaceholder.typicode.com/posts`;
const LOGIN_URL = `${API_BASE_URL}/login`;
const PROFILE_URL = `${API_BASE_URL}/profile`;

//  إنشاء حساب جديد
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(REGISTER_URL, userData);
    const returnedUser = Array.isArray(response.data)
      ? response.data.find((user) => user.email === userData.email)
      : response.data.user || response.data.data || response.data;
    return returnedUser;

    // return response.data;
  } catch (error) {
    console.error("فشل في إنشاء الحساب:", error);
    throw error;
  }
};

// (لاحقًا)
// export const loginUser = async (credentials) => {
//   try {
//     const response = await axios.post(LOGIN_URL, credentials);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
