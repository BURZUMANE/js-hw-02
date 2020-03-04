'use strict'

const findLongestWord = function (string) {
    let longestWord = "";
    const wordsArray = string.split(" ");
    for (let word in wordsArray) {
        if (wordsArray[word].length > longestWord.length) {
            longestWord = wordsArray[word];
        }
    }
    return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'