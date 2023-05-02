interface ILessonVerseProps {
  toggleShowVerse: () => void;
}

const LessonVerse = ({ toggleShowVerse }: ILessonVerseProps) => {
  return (
    <div className="m-auto" onClick={toggleShowVerse}>
      <text className="basis-1/3 text-4xl sm:text-5xl text-slate-400">
        1 John 1:9
      </text>
    </div>
  );
};

export default LessonVerse;
