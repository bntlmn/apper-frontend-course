function transform(arr) {
    return arr.map(x => x * x).sort((a, b) => a - b)
}

// Example usage:
const inputArray = [3, 1, -2, 4]
const result = transform(inputArray)
console.log(result) // Output: [1, 4, 9, 16]