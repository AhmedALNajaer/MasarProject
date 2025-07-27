import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getAllMockCourses } from "../services/coursesService.jsx";
import courseService from "../services/coursesService.jsx";

import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import RightSide from "../components/courses/RightSide(list).jsx";
import LiftSide from "../components/courses/LiftSide(Content).jsx";
// import CoursesCards from "../components/courses/CoursesCards.jsx";

const SingleCoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // استدعاء البيانات الوهمية
    // getAllMockCourses()
    //   .then((courses) => {
    //     const selected = courses.find((c) => c.id === Number(id));
    //     setCourse(selected);
    //   })
    //   .catch((err) => console.error("فشل في تحميل الدورة:", err));

    // استدعاء بيانات ال API

    const fetchCourse = async () => {
      try {
        const response = await courseService.fetchCourseById(id);
        console.log("بيانات الدورة:", response);
        setCourse(response);
        setVideos(response.videos || []);
        setSelectedVideo(response.videos?.[0] || null);
        setLoading(false);
      } catch (error) {
        console.error("فشل في تحميل الدورة:", error);
        setError("حدث خطأ أثناء تحميل الدورة، حاول لاحقًا");
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <div>جارٍ التحميل...</div>;
  if (error)
    return <div className="text-red-600 text-center my-10">{error}</div>;
  if (!course) return <div>الدورة غير موجودة</div>;
  return (
    <div>
      <Navbar />
      {/* course title  */}
      <div>
        <div className="container my-5 mx-auto text-center  p-5 ">
          <h1 className="text-3xl font-bold my-5 max-md:text-2xl max-xs:text-xl">
            {course.title}
          </h1>
          <p className="w-[60%] mx-auto text-gray-800 text-xl max-lg:w-[80%] max-sm:w-[100%]  max-md:text-lg max-xs:text-base ">
            {course.description_paragraph || " الوصف غير متوفر"}
          </p>
        </div>
      </div>

      {/* start page sides  */}
      <div className="Sides w-[95%] mx-auto mb-20">
        <div className="grid grid-cols-5 gap-10 max-lg:grid-cols-1 max-lg:gap-0">
          {/* right side (list)  */}
          <RightSide
            videos={videos}
            selectedVideo={selectedVideo}
            onSelectVideo={setSelectedVideo}
          />

          {/* left side content  */}
          <LiftSide course={course} selectedVideo={selectedVideo} />
        </div>
      </div>
      {/* end page sides  */}

      {/* other courses options  */}
      <div>
        <div className="container  mx-auto text-center  p-5 ">
          <h1 className="text-3xl font-bold max-md:text-2xl max-xs:text-xl">
            دورات قد تهمك
          </h1>
        </div>
        {/* <CoursesCards /> */}
      </div>

      <Footer />
    </div>
  );
};

export default SingleCoursePage;
