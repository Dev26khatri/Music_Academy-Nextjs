import Link from "next/link";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/moving-border";
const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col itmer-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master The Art Of Music
        </h1>
        <p className="mt-5 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Discover the language of sound and transform your passion into
          mastery. Learn technique, rhythm, and expression from expert mentors.
          Create music that moves hearts, tells stories, and defines your
          identity.
        </p>
        <div className="mt-4 ">
          <Link href={"/courses"} className="font-semibold ">
            <Button
              borderRadius="1.75rem"
              className=" bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800  "
              containerClassName="hover:cursor-pointer hover:scale-110  transition-all duration-300 hover:bg-slate-700"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
