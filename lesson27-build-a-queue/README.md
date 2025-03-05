# Lesson #: TOPIC

## Warm-up (10 minutes)

## Written Question (5 minutes)

Describe a real-world scenario where a queue would be a suitable data structure. Explain why FIFO is important in that context.

A real-world scenario where a queue is suitable is in a customer service line at a bank. Customers are served in the order they arrive, meaning the first customer to enter the queue is the first to be served.

## Lecture Content (20 minutes)

1. What is a Queue?

- A queue is a linear data structure where elements are processed in the order they arrive.
- Operations:
  - `enqueue`: Adds an element to the back of the queue.
  - `dequeue`: Removes and returns the element at the front of the queue.
  - `peek`: Retrieves the front element without removing it.
  - `isEmpty`: Checks if the queue is empty.

2. Why Use Classes?

- Classes provide a blueprint to create objects.
- They help encapsulate data and methods, making the implementation reusable and clean.

3. Structure of a Queue Class

- Properties: items (array to store elements).
- Methods: `enqueue`, `dequeue`, `peek`, `isEmpty`.

**Implementing a Queue with Classes**

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add an element to the queue
  enqueue(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Remove and return the head element
  dequeue() {}

  // View the head element
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.head.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.head === null;
  }
}
```

4. Example usage:

```js
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.peek()); // Output: 10
console.log(queue.isEmpty()); // Output: false
```

## Problem Solving (35 minutes)

## Recap (15 minutes)

Key Takeaways:

1. A queue is a FIFO data structure with common operations like `enqueue`, `dequeue`, and `peek`.
2. Classes in JavaScript provide a clean and reusable way to implement data structures.
3. Encapsulation of properties and methods improves readability and maintainability.

## Additional Resources

[JavaScript Data Structures - 10 - Queue Implementation Optimised](https://www.youtube.com/watch?v=ba15sgOiAOg)
