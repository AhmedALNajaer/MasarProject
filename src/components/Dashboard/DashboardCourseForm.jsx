import React from "react";

const DashboardCourseForm = ({
  formData,
  formState,
  handleChange,
  handleVideosChange,
  addVideoField,
  handleAddCourse,
  handleEditCourse,
  //   resetForm,
}) => {
  return (
    <form
      onSubmit={formState.isEditing ? handleEditCourse : handleAddCourse}
      className="bg-white border border-gray-300 rounded-2xl p-4 mb-6"
    >
      <h2 className="text-xl font-bold mb-4">
        {formState.isEditing ? "تعديل الدورة" : "إضافة دورة جديدة"}
      </h2>
      {/* عنوان الدورة  */}
      <div className="mb-3">
        <label className="block">عنوان الدورة</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>
      {/* صورة الدورة  */}
      <div className="mb-3">
        <label className="block">صورة الدورة</label>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
          accept="image/*"
        />
      </div>
      {/* وصف الدورة  */}
      <div className="mb-3">
        <label className="block">وصف الدورة</label>
        <textarea
          name="description_paragraph"
          value={formData.description_paragraph}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>
      {/* المدة الزمنية للدورة  */}
      <div className="mb-3">
        <label className="block">المدة الزمنية</label>
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>
      {/* عدد الدروس  */}
      <div className="mb-3">
        <label className="block">عدد الدروس</label>
        <input
          type="number"
          name="number_of_lessons"
          value={formData.number_of_lessons}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>
      {/* الدروس مقاطع  */}
      <div className="mb-3">
        <label className="block">مقاطع الدورة</label>
        {formData.videos.map((_, index) => (
          <input
            key={index}
            type="file"
            accept="video/*"
            onChange={(e) => handleVideosChange(index, e.target.files[0])}
            className="w-full border px-2 py-1 mb-2 rounded"
          />
        ))}
        <button
          type="button"
          onClick={addVideoField}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          إضافة مقطع اخر
        </button>
      </div>

      {/* اسم المدرس  */}
      <div className="mb-3">
        <label className="block">اسم المدرس</label>
        <input
          type="text"
          name="instructor_name"
          value={formData.instructor_name}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>
      {/* رقم القسم */}
      <div className="mb-3">
        <label className="block">رقم القسم</label>
        <input
          type="number"
          name="faculty_department_id"
          value={formData.faculty_department_id}
          onChange={handleChange}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>
      {/* زر الارسال سواء اضافة او تعديل  */}
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        {formState.isEditing ? "تحديث" : "إضافة"}
      </button>
    </form>
  );
};

export default DashboardCourseForm;
