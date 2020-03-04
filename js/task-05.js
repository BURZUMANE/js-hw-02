'use strict'

const checkForSpam = function (message) {
    // FORBBIDEN WORDS
    const forbiddenWords = ['spam', 'sale'];
    // STRING INTO ARRAY
    const strArray = message.toLowerCase().split(" ");
    let isSpam;
    for (let i = 0; i < forbiddenWords.length; i++) {
        for (const word in strArray) {
            if (strArray[word].includes(forbiddenWords[i])) {
                return isSpam = true;
            } else {
                isSpam = false;
            }

        }
    }
    return isSpam;
};

/*
 * VARIOUS FUNCTION CALL FOR TESTING
 */
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true