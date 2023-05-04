interface ILessonVerseProps {
  toggleShowVerse: () => void;
}

const LessonVerse = ({ toggleShowVerse }: ILessonVerseProps) => {
  return (
    <div className="m-auto" onClick={toggleShowVerse}>
      <button className="basis-1/3 text-4xl sm:text-5xl lg:text-6xl text-slate-200">
        1 John 1:9
      </button>
    </div>
  );
};

export default LessonVerse;
