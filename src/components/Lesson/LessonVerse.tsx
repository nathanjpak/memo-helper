interface ILessonVerseProps {
  toggleShowVerse: () => void;
  verseAddress: string;
}

const LessonVerse = ({ toggleShowVerse, verseAddress }: ILessonVerseProps) => {
  return (
    <div className="m-auto" onClick={toggleShowVerse}>
      <button className="basis-1/3 text-4xl sm:text-5xl lg:text-6xl text-slate-200">
        {verseAddress}
      </button>
    </div>
  );
};

export default LessonVerse;
