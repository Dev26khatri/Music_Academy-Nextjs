"use client";
import CourseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/moving-border";

interface CoursesData {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedCourses = () => {
  const fillteredData = CourseData.courses.filter(
    (course: CoursesData) => course.isFeatured
  );
  return (
    <div className="py-12  bg-gray-900 ">
      <div>
        <div className="text-center">
          <p className=" text-teal-600 font-semibold tracking-wide text-base">
            FEATURED COURSES
          </p>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
            Learn With The Best
          </h2>
        </div>
      </div>
      <div className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {fillteredData.map((data) => (
            <div key={data.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-2xl bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm ">
                <div className="p-5 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {data.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {data.description}
                  </p>
                  <Link
                    href={`/courses/${data.slug}`}
                    className="mt-3 py-2 px-4 bg-white text-gray-700 rounded-lg font-semibold  "
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href="/courses"
          className="px-4 py-2  rounded-lg text-neutral-700 bg-white font-semibold hover:bg-gray-400 hover:text-neutral-900  transition-all duration-500 "
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
