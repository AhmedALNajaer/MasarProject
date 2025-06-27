/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zain: ["Zain", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#189BBD",  // اللون الأساسي (مثلاً لون أحمر)
        secondary: "#227487", // اللون الثانوي (مثلاً لون أخضر)
        accent: "#FFD700",    // لون مميز (مثلاً لون ذهبي)
        dark: "#3a3a3a",      // لون داكن (مثلاً لون رمادي داكن)
        light: "#f8f8ff",     // لون فاتح (مثلاً لون رمادي فاتح)
      },
    },
  },
  plugins: [],
};
