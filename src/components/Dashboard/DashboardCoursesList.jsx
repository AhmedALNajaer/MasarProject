import React, { useState, useEffect } from "react";
import courseService from "../../services/coursesService";
import DashboardCourseForm from "./DashboardCourseForm";

const DashboardCourses = () => {
  const [courses, setCourses] = useState([]);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
  });

  const [formData, setFormData] = useState({
    title: "",
    description_paragraph: "",
    duration: "",
    number_of_lessons: "",
    instructor_name: "",
    image: null,
    videos: [""],
    faculty_department_id: "",
  });

  const [formState, setFormState] = useState({
    visible: false,
    isEditing: false,
    courseToEdit: null,
  });

  const fetchAllCourses = async (page = 1) => {
    try {
      const response = await courseService.getCourses(page);

      // console.log("النوع:", typeof response);
      // console.log("هل هو Array؟", Array.isArray(response));
      // console.log("المحتوى:", response);
      // console.log("البيانات الجديدة بعد الإضافة:", response);
      setCourses(response.data);
      setPagination(response);
      console.log("تم تحديث قائمة الدورات:", response.data);
    } catch (error) {
      console.error("خطأ في تحميل الدورات:", error);
    }
  };
  //     if (Array.isArray(response)) {
  //       setCourses(response);
  //     } else if (Array.isArray(response.data)) {
  //       setCourses(response.data);
  //     } else if (Array.isArray(response.data?.data)) {
  //       setCourses(response.data.data);
  //     } else {
  //       console.error("لم يتم العثور على البيانات بشكل صحيح");
  //     }
  //   } catch (error) {
  //     console.error("خطأ في تحميل الدورات:", error);
  //   }
  // };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // const handleVideosChange = (index, value) => {
  //   const updatedVideos = [...formData.videos];
  //   updatedVideos[index] = value;
  //   setFormData((prev) => ({ ...prev, videos: updatedVideos }));
  // };

  // const addVideoField = () => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     videos: [...prev.videos, ""],
  //   }));
  // };

  const resetForm = () => {
    setFormData({
      title: "",
      description_paragraph: "",
      duration: "",
      number_of_lessons: "",
      instructor_name: "",
      image: null,
      videos: [""],
      faculty_department_id: "",
    });
    setFormState({
      visible: false,
      isEditing: false,
      courseToEdit: null,
    });
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "videos") {
          value.forEach((video, index) =>
            data.append(`videos[${index}]`, video)
          );
        } else {
          data.append(key, value);
        }
      });
      await courseService.addCourse(data);
      // await fetchAllCourses();
      resetForm();
      alert("تمت إضافة الدورة بنجاح!");
    } catch (error) {
      alert("فشل في إضافة الدورة!");
      console.error("فشل في إضافة الدورة:", error);
    }
  };

  const handleEditCourse = async (e) => {
    e.preventDefault();
    try {
      if (!formState.courseToEdit) return;

      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "videos") {
          value.forEach((video, index) =>
            data.append(`videos[${index}]`, video)
          );
        } else if (key === "image") {
          if (value) {
            // فقط أرسل الصورة إذا كانت موجودة
            data.append("image", value);
          }
        } else {
          data.append(key, value);
        }
      });
      await courseService.editCourse(formState.courseToEdit.id, data);
      await fetchAllCourses();
      resetForm();
      console.log("بيانات التعديل المرسلة:", formData);
      alert("تم تحديث الدورة بنجاح!");
    } catch (error) {
      alert("فشل في تعديل الدورة!");
      console.error("فشل في تعديل الدورة:", error);
    }
  };

  const handleDeleteCourse = async (id) => {
    if (!window.confirm("هل أنت متأكد من حذف هذه الدورة؟")) return;

    try {
      await courseService.deleteCourse(id);
      alert("تم حذف الدورة بنجاح");
      fetchAllCourses(); // لإعادة تحميل القائمة
    } catch (error) {
      console.error("فشل في حذف الدورة:", error);
      alert("فشل في حذف الدورة. حاول مرة أخرى.");
    }
  };

  const handleEdit = (course) => {
    setFormData({
      title: course.title,
      description_paragraph: course.description_paragraph,
      duration: course.duration,
      number_of_lessons: course.number_of_lessons,
      instructor_name: course.instructor_name,
      image: null,
      videos: course.videos || [""],
      faculty_department_id: course.faculty_department_id,
    });

    setFormState({
      visible: true,
      isEditing: true,
      courseToEdit: course,
    });
  };

  const toggleForm = () => {
    if (formState.visible) {
      resetForm();
    } else {
      setFormState({ visible: true, isEditing: false, courseToEdit: null });
    }
  };

  return (
    <div className="Main px-6">
      {/* زر عرض و اخفاء الفورم  */}
      <div className="my-4 flex justify-end">
        <button
          className="bg-blue-500 px-5 py-3 rounded-xl text-white text-xl"
          onClick={toggleForm}
        >
          {formState.isEditing
            ? "إلغاء التعديل"
            : formState.visible
            ? "إلغاء الإضافة"
            : "إضافة دورة"}
        </button>
      </div>
      {/* فورم الاضافة و التعديل  */}
      {formState.visible && (
        <DashboardCourseForm
          formData={formData}
          formState={formState}
          handleChange={handleChange}
          // handleVideosChange={handleVideosChange}
          // addVideoField={addVideoField}
          handleAddCourse={handleAddCourse}
          handleEditCourse={handleEditCourse}
          resetForm={resetForm}
        />
      )}
      {/* عرض الدورات */}
      <div className="grid grid-cols-3 gap-5">
        {Array.isArray(courses) &&
          courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border-2 border-blue-900 rounded-3xl p-3"
            >
              {course.image && (
                <img
                  src={`http://localhost:8000/storage/${course.image}`}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-xl mb-2"
                />
              )}
              <h2 className="text-xl font-bold mb-1">
                العنوان :{course.title || "العنوان غير متوفر"}
              </h2>
              <p className="text-sm mb-1">
                وصف الدورة :{course.description_paragraph || "الوصف غير موجود"}
              </p>
              <p className="text-sm">المدة: {course.duration || "0 ساعة"}</p>
              <p className="text-sm">
                الدروس: {course.number_of_lessons || "0 دروس"}
              </p>
              <p className="text-sm">
                المدرس: {course.instructor_name || "غير معروف"}
              </p>
              <div className="buttons flex justify-between w-[80%] m-auto">
                {/* edit  */}
                <button
                  className="mt-2 px-4 py-2 text-lg text-white bg-blue-600 rounded-xl hover:bg-blue-800"
                  onClick={() => handleEdit(course)}
                >
                  تعديل
                </button>
                {/* delete  */}
                <button
                  onClick={() => handleDeleteCourse(course.id)}
                  className="mt-2 px-4 py-2 text-lg text-white bg-red-600 rounded-xl hover:bg-red-800 "
                >
                  حذف
                </button>
              </div>
            </div>
          ))}
      </div>
      {/* تنقل الصفحات  */}
      <div>
        <div className="flex justify-center mt-10">
          <div className="join space-x-2 bg-white p-2 rounded-xl shadow-lg">
            {/* زر السابق */}
            <button
              className={`join-item btn px-4 py-2 ${
                pagination.current_page === 1
                  ? "btn-disabled opacity-50"
                  : "btn-outline"
              }`}
              onClick={() =>
                pagination.current_page > 1 &&
                fetchAllCourses(pagination.current_page - 1)
              }
              disabled={pagination.current_page === 1}
            >
              السابق «
            </button>

            {/* أزرار الصفحات */}
            {Array.from({ length: pagination.last_page }, (_, i) => (
              <button
                key={i}
                className={`join-item btn px-4 py-2 transition-all duration-200 ${
                  pagination.current_page === i + 1
                    ? "btn-primary text-white"
                    : "btn-outline"
                }`}
                onClick={() => fetchAllCourses(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            {/* زر التالي */}
            <button
              className={`join-item btn px-4 py-2 ${
                pagination.current_page === pagination.last_page
                  ? "btn-disabled opacity-50"
                  : "btn-outline"
              }`}
              onClick={() =>
                pagination.current_page < pagination.last_page &&
                fetchAllCourses(pagination.current_page + 1)
              }
              disabled={pagination.current_page === pagination.last_page}
            >
              » التالي
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCourses;
