// src/app/coursedetail/[slug]/page.jsx
import { getProgramDetail } from "@/lib/getProgramDetail"; // adjust path to wherever you keep it
import CoursePage from "./CoursePageClient"; // the component below, renamed

export default async function Page({ params }) {
  const { slug } = await params;
  const course = await getProgramDetail(slug);

  if (!course) {
    return <div className="container py-20">Course not found.</div>;
  }

  return <CoursePage course={course} />;
}