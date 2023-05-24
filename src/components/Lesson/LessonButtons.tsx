import Link from "next/link";

const LessonButtons = () => {
  return (
    <>
      <Link
        href="/Lesson"
        className="w-full sm:w-4/5 p-4 text-2xl text-center hover:text-slate-200"
      >
        Lesson 1
      </Link>
      <Link
        href="/Lesson"
        className="w-full sm:w-4/5 p-4 text-2xl text-center hover:text-slate-200"
      >
        Lesson 2
      </Link>
      <Link
        href="/Lesson"
        className="w-full sm:w-4/5 p-4 text-2xl text-center hover:text-slate-200"
      >
        Lesson 3
      </Link>
    </>
  );
};

export default LessonButtons;
