const formatCategory = (text) => {
  return text.replace('_', ' ').toUpperCase();
};

const formatWord = (text) => {
  const words = text.split('_');

  const modifiedWords = words.map((word) => {
    const firstLetter = word.charAt(0);
    const capitalizedFirstLetter = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1);

    const latestWord = capitalizedFirstLetter + remainingLetters;
    return latestWord;
  });

  const finalWord = modifiedWords.join(' ');
  return finalWord;
};

export { formatCategory, formatWord };
