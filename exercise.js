function capitalize(words) {
  const wordsInArray = []
  wordsInArray.push(words);
  return wordsInArray.map((word) => word.toUpperCase()).toString();
}
console.log(capitalize("hallo"));

function swapCase(words) {
  const wordsInArray = words.split(' ');

  return wordsInArray.map((word, index) => {
    if (index % 2 === 0) {
      return word.toUpperCase();
    };

    return word;
  }).join(" ");
};

console.log(swapCase("hallo apa kabar semuanya??"));
