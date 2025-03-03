/**
 * Implement a class `Queue` with the following methods:
 *
 * 1. `enqueue(element)`: Adds an element to the end of the queue.
 * 2. `dequeue()`: Removes and returns the front element of the queue.
 * 3. `peek()`: Returns the front element without removing it.
 * 4. `isEmpty()`: Returns true if the queue is empty, otherwise false.
 * 5. `size()`: Returns the size of the queue.
 *
 * Please note that the time complexity of all methods are not optimal when using an array. But for the sake of simplicity, you can use an array to implement the queue. If you're interested in learning more about the optimal implementation, think about how you might use two stacks for optimal time complexity.
 */
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    return this.items.push(element);
  }

  dequeue() {
    return this.items.length > 0 ? this.items.shift() : null;
  }

  peek() {
    return this.items.length > 0 ? this.items[0] : null;
  }

  isEmpty() {
    return this.items.length === 0 ? true : false;
  }

  size() {
    return this.items.length;

  }
}

const newQueue = new Queue();
newQueue.enqueue("hi");
newQueue.dequeue();
newQueue.peek();
newQueue.isEmpty();
console.log(newQueue.size());

module.exports = Queue;
