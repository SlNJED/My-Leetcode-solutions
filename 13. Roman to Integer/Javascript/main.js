/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanNumerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let result = 0;

    for (let index = 0; index <= s.length - 1; index++) {
        let currentRomanNumeral = romanNumerals[s[index]];

        if (romanNumerals[s[index + 1]] > currentRomanNumeral) {
            result -= currentRomanNumeral;
        }
        else {
            result += currentRomanNumeral;
        }
    }

    return result;
};

let roman = "MCMXCIV";
console.log(romanToInt(roman));