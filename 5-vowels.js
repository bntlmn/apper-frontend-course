function convertToVowels(str) {
    const vowels = str.match(/[aeiouAEIOU]/g)
    return vowels ? vowels.join('') : ''
}

console.log(convertToVowels("hello world"))
console.log(convertToVowels("Bit of Coin"))
console.log(convertToVowels("JavaScript"))   
console.log(convertToVowels("aeiou"))
console.log(convertToVowels("bcdfghjklmnpqrstvwxyz"))