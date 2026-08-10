import { getPrograms } from "@/lib/getPrograms";
import CoursesPageClient from "@/components/CoursesPageClient";

export default async function Page() {
  const programs = await getPrograms();
  return <CoursesPageClient initialPrograms={programs} />;
  
}