const genReadingActivity = (verseText: string) => {
  return {
    displayedText: [verseText],
    instructions: "Please read through the verse carefully three times.",
  };
};

export default genReadingActivity;
