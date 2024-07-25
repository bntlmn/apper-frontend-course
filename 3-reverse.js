function reverse(input) {
    let reversedString = ''
    for (let i = input.length - 1; i >= 0; i--) {
        reversedString += input[i]
    }
    return reversedString
}

// Example usage:
const inputString = "hello"
const result = reverse(inputString)
console.log(inputString)
console.log(result)
