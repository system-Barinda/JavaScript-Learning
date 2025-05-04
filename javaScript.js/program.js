 class Stack {
  constructor() {
    this.items = [];
  }

  
  push(item) {
    this.items.push(item);
  }

 
  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

 
  isEmpty() {
    return this.items.length === 0;
  }

  
  size() {
    return this.items.length;
  }

 
  display() {
    return this.items;
  }
}


async function displayStackAsync(stack) {
  const displayArea = document.getElementById('stackDisplay');

  while (!stack.isEmpty()) {
    const item = stack.pop();
    
  
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('stack-item');
    itemDiv.textContent = item;

   
    displayArea.appendChild(itemDiv);

    
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}


const stack1 = new Stack();
stack1.push("Item 1");
stack1.push("Item 2");
stack1.push("Item 3");
stack1.push("Item 4");

const startButton = document.getElementById('startDisplay');


startButton.addEventListener('click', () => {
  displayStackAsync(stack1); 
});

