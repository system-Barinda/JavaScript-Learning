class Stack {
    constructor() {
      this.items = []; // Initialize empty array
    }
  
    // Push: Add element to the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop: Remove and return top element
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty!";
      }
      return this.items.pop();
    }
  
    // Peek: Return top element without removing
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty!";
      }
      return this.items[this.items.length - 1];
    }
  
    // isEmpty: Check if stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Size: Get number of elements
    size() {
      return this.items.length;
    }
  }
  
  // Example Usage
  const stack = new Stack();
  stack.push(100);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.peek()); // Output: 30
  console.log(stack.pop());  // Output: 30
  console.log(stack.size()); // Output: 2
  