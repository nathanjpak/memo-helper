interface ILessonVerseTextProps {
  text: string;
}

const LessonVerseText = ({ text }: ILessonVerseTextProps) => {
  return (
    <div className="text-4xl w-5/6 sm:w-1/2 text-center">
      <p className="mb-8">{text}</p>
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
