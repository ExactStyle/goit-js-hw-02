// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""),
// которая принимает параметром произвольную строку(в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

function findLongestWord(string = "") {
  // Write code under this line
  const words = string.split(" ");
  let longestWord = words[0];
  for (const word of words) {
    const isLongest = word.length > longestWord.length;
    if (isLongest) longestWord = word;
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
