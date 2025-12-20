"use client";

import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

const Instructors = () => {
  const Instructors = [
    {
      id: 1,
      name: "Jenny",
      designation: "Vocal Music Instructor",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      name: "Zack",
      designation: "Classical Singing Coach",
      image:
        "https://images.unsplash.com/photo-1590086782792-42dd2350140d?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Zaxion",
      designation: "Guitar Instructor",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Neha Kapoor",
      designation: "Piano & Keyboard Teacher",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <div className="relative h-[40rem] flex items-center justify-center overflow-hidden">
      <WavyBackground className="w-full h-full flex flex-col items-center justify-center max-w-7xl mx-auto pb-40">
        <h2 className="text-3xl sm:text-4xl md:text-6xl text-white text-center font-bold tracking-wide mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-sm sm:text-lg mt-2 mb-4 text-white text-center">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={Instructors} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructors;
