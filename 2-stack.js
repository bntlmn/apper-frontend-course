class Stack {
    constructor() {
        this.items = []
    }
    push(arr) {
        for (let item of arr) {
            if (typeof item === 'string') {
                this.items.push(item)
            }
        }
    }
    pop() {
        if (this.items.length === 0) {
            return "Stack is empty"
        }
        return this.items.pop()
    }
    check() {
        if (this.items.length === 0) {
            return "Stack is empty"
        }
        return this.items[this.items.length - 1]
    }
}

// Example usage:
const myStack = new Stack()
myStack.push([1, "apple", 3.5, "banana", true, "cherry"])
console.log(myStack.items)
console.log(myStack.check())
console.log(myStack.pop())
console.log(myStack.items)
console.log(myStack.check())