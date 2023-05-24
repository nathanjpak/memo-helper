import Head from "next/head";
import { useState } from "react";
import LessonVerse from "../components/Lesson/LessonVerse";
import LessonVerseText from "../components/Lesson/LessonVerseText";
import LessonButtons from "../components/Lesson/LessonButtons";

type TVerse = {
  address: string;
  text: string;
};

export default function IndexPage() {
  const [showVerse, setShowVerse] = useState(false);
  const [verse, setVerse] = useState<TVerse>({
    address: "1 John 1:9",
    text: `But if we confess our sins to him, he is faithful and just to forgive us
    our sins and to cleanse us from all wickedness.`,
  });

  return (
    <div className="flex flex-col p-8 items-center justify-around h-[100vh]">
      <Head>
        <title>Memo Helper</title>
        <meta
          name="description"
          content="An app to help you memorize things."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LessonVerse
        toggleShowVerse={() => setShowVerse(!showVerse)}
        verseAddress={verse.address}
      />
      <div className="flex flex-col basis-2/3 w-full text-slate-400 justify-around items-center">
        {showVerse ? <LessonVerseText text={verse.text} /> : <LessonButtons />}
      </div>
    </div>
  );
}
