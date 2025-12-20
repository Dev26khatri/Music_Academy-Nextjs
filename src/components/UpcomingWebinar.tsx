"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const UpcomingWebinar = () => {
  const Carddata = [
    {
      title: "Classical Music Training",
      description:
        "Learn the fundamentals of classical music with expert guidance in vocals and instruments.",
      slug: "classical-music-training",
      isFeatured: true,
    },
    {
      title: "Guitar Lessons for Beginners",
      description:
        "Start your guitar journey with basic chords, strumming patterns, and popular songs.",
      slug: "guitar-lessons-for-beginners",
      isFeatured: true,
    },
    {
      title: "Piano & Keyboard Course",
      description:
        "Master piano and keyboard skills from basics to advanced techniques.",
      slug: "piano-keyboard-course",
      isFeatured: false,
    },
    {
      title: "Vocal Training Program",
      description:
        "Improve your voice with breathing techniques, scales, and performance practice.",
      slug: "vocal-training-program",
      isFeatured: true,
    },
    {
      title: "Music Production & Mixing",
      description:
        "Learn digital music production, mixing, and mastering using modern software tools.",
      slug: "music-production-mixing",
      isFeatured: false,
    },
    {
      title: "Drum & Rhythm Classes",
      description:
        "Develop rhythm, timing, and coordination with hands-on drum practice.",
      slug: "drum-rhythm-classes",
      isFeatured: false,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="text-center">
          <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase mb-2">
            FEATURED WEBINAR
          </h2>
          <p className="text-3xl sm:text-5xl mt-2 tracking-tight leading-8 lg font-bold">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect items={Carddata} />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/courses"}
            className="px-4 py-2  rounded-lg text-neutral-700 bg-white font-semibold hover:bg-gray-400 hover:text-neutral-900  transition-all duration-500 "
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinar;
