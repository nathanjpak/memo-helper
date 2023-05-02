import Head from "next/head";
import { useState } from "react";
import LessonVerse from "../components/Lesson/LessonVerse";
import LessonVerseText from "../components/Lesson/LessonVerseText";
import LessonButtons from "../components/Lesson/LessonButtons";

export default function IndexPage() {
  const [showVerse, setShowVerse] = useState(false);

  return (
    <div className="flex flex-col p-8 items-center justify-around h-[100vh]">
      <Head>
        <title>Memo Helper</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LessonVerse toggleShowVerse={() => setShowVerse(!showVerse)} />
      <div className="flex flex-col basis-2/3 w-full text-slate-400 justify-around items-center">
        {showVerse ? <LessonVerseText /> : <LessonButtons />}
      </div>
    </div>
  );
}
