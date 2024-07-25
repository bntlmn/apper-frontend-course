function isPalindrome(input) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    
    // Check if the cleaned input is the same as its reversed version
    for (let i = 0; i < Math.floor(cleanedInput.length / 2); i++) {
        if (cleanedInput[i] !== cleanedInput[cleanedInput.length - 1 - i]) {
            return false
        }
    }
    return true
}

// Example usage:
console.log(isPalindrome("racecar"))
console.log(isPalindrome("hello"))
console.log(isPalindrome("A man, a plan, a canal, Panama"))