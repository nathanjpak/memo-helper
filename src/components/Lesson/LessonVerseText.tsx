const LessonVerseText = () => {
  return (
    <div className="text-4xl w-5/6 sm:w-1/2 text-center">
      <p className="mb-8">
        But if we confess our sins to him, he is faithful and just to forgive us
        our sins and to cleanse us from all wickedness.
      </p>
      {/* <button className="hover:animate-spin hover:after:content-['New_Verse?'] after:text-3xl after:inline-block">
        {"\u21bb"}
      </button> */}
      <button className="hover:text-slate-200 before:content-['\21bb'] before:inline-block hover:before:animate-spin after:content-['New_Verse?'] after:text-3xl after:absolute after:opacity-0">
        {" "}
      </button>
    </div>
  );
};

export default LessonVerseText;
