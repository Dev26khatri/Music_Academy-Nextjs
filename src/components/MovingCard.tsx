"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";
const MovingCard = () => {
  const testimonials = [
    {
      quote:
        "Joining this music academy completely transformed my understanding of music. The structured lessons and constant practice sessions helped me gain confidence and perform on stage for the first time.",
      name: "Aarav Sharma",
      title: "Piano Student",
    },
    {
      quote:
        "The instructors are highly professional and supportive. From music theory to advanced techniques, every lesson is well explained and easy to follow. I’ve grown more in six months here than in years of self-learning.",
      name: "Neha Verma",
      title: "Vocal Training Student",
    },
    {
      quote:
        "Live practice sessions and one-on-one feedback made a huge difference in my guitar playing. I can now compose my own music and perform with confidence.",
      name: "Rohan Mehta",
      title: "Guitar Student",
    },
    {
      quote:
        "What I love most about this academy is the balance between theory and performance. The recital opportunities helped me overcome stage fear and showcase my talent.",
      name: "Priya Nair",
      title: "Violin Student",
    },
    {
      quote:
        "This academy doesn't just teach music—it builds musicians. The supportive environment, expert guidance, and performance-focused training helped me prepare for professional auditions.",
      name: "Aditya Kulkarni",
      title: "Advanced Music Program",
    },
  ];

  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      >
        <h2 className="mt-30 text-3xl z-10 sm:text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400">
          Hear Our Harmony : Voices of Success
        </h2>
        <div
          // className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
          className="mt-30"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default MovingCard;
