// src/app/coursedetail/[slug]/page.jsx
import { getProgramDetail } from "@/lib/getProgramDetail";
import { getPrograms } from "@/lib/getPrograms";
import CoursePage from "./CoursePageClient";

export default async function Page({ params }) {
  const { slug } = await params;
  const [course, allCourses] = await Promise.all([
    getProgramDetail(slug),
    getPrograms(),
  ]);

  if (!course) {
    return <div className="container py-20">Course not found.</div>;
  }

  return <CoursePage course={course} allCourses={allCourses} />;
}