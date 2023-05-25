// create class of stack and write operations of stack and make queue out of it

class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[0];
    }
}

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    // time complexity: O(1)

    enQueue(data) {
        console.log('Enquing...');
        this.stack1.push(data);
        return this.stack1;
    }
    // time complexity: O(n)

    deQueue() {
        console.log('Dequing...');
        while (this.stack1.peek() !== undefined) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack2.pop();
        while (this.stack2.peek() !== undefined) {
            this.stack1.push(this.stack2.pop());
        }
        return this.stack1;
    }
    // time complexity: O(n)

    peek() {
        return `Peeking element from queue: ${this.stack1.peek()}`;
    }
}

let queue = new Queue();
console.log(queue.enQueue(10));
console.log(queue.enQueue(20));
console.log(queue.enQueue(30));
console.log(queue.enQueue(40));
console.log(queue.enQueue(60));
console.log(queue.enQueue(70));
console.log(queue.enQueue(80));
console.log(queue.deQueue());
console.log(queue.peek());
console.log(queue.deQueue());
console.log(queue.peek());
console.log(queue.deQueue());
console.log(queue.deQueue());
console.log(queue.peek());
