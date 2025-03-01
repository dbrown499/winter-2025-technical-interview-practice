/**
 * Implement a Stack class with the following methods:
 * - push(item): Adds an item to the top of the stack.
 * - pop(): Removes and returns the top item. If the stack is empty, return null.
 * - peek(): Returns the top item without removing it. If the stack is empty, return null.
 * - isEmpty(): Returns true if the stack is empty, false otherwise.
 */
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length) {
      return this.items.pop();
    } else {
      return null;
    }
  }

  peek() {
    if (this.items.length) {
      return this.items[this.items.length - 1];
    } else {
      return null;
    }

  }

  isEmpty() {
    return this.items.length ? false : true;

  }
}

const browser = new Stack();
browser.push("hello");
browser.push(" hi again!");
browser.push("bye");
console.log(browser.pop());
// console.log(browser.isEmpty());


module.exports = Stack;
