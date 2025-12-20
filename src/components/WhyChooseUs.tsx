import { StickyScroll } from "./ui/sticky-scroll-reveal";
const MusicContent = [
  {
    title: "Professional Music Training",
    description:
      "Learn music from experienced instructors with structured courses designed for beginners to advanced learners. Build strong foundations in theory, technique, and performance across various instruments and vocal training.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white text-xl font-semibold">
        Professional Music Training
      </div>
    ),
  },
  {
    title: "Live Practice Sessions",
    description:
      "Participate in live practice sessions and workshops where students can perform, receive instant feedback, and improve their skills in real time. Experience the energy of collaborative learning and guided practice.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        Live Practice
      </div>
    ),
  },
  {
    title: "Music Theory & Composition",
    description:
      "Understand the language of music with in-depth lessons on music theory, composition, and songwriting. Learn how to read notation, create melodies, and compose original pieces with confidence.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--blue-500))] text-white text-xl font-semibold">
        Music Theory & Composition
      </div>
    ),
  },
  {
    title: "Performance & Certification",
    description:
      "Showcase your talent through recitals, exams, and stage performances. Earn recognized certifications that validate your skills and help you progress toward a professional music career.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-500),var(--orange-500))] text-white text-xl font-semibold">
        Performance & Certification
      </div>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full py-4 ">
      <StickyScroll content={MusicContent} />
    </div>
  );
};

export default WhyChooseUs;
