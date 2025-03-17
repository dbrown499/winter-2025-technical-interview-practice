const Queue = require("./problem");

test("Enqueue adds a node to the end of the queue", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.length).toEqual(3);
  expect(queue.head.value).toEqual(1);
  expect(queue.tail.value).toEqual(3);
});
test("Enqueue makes the node the tail and the head if the length is now 1", () => {
  const queue = new Queue();
  queue.enqueue(1);
  expect(queue.length).toEqual(1);
  expect(queue.tail === queue.head).toEqual(true);
});
test("Dequeue removes the head and returns the new head", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.dequeue().head.value).toEqual(2);
  expect(queue.length).toEqual(2);
});
test("Dequeue makes the head and tail is null if the length is now 0", () => {
  const queue = new Queue();
  queue.enqueue(1);
  expect(queue.dequeue().head).toEqual(null);
  expect(queue.tail).toEqual(null);
  expect(queue.length).toEqual(0);
});
test("Size returns the length of the queue", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.length).toEqual(3);
});
test("Clear removes all nodes from the queue", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.clear().length).toEqual(0);
  expect(queue.head).toEqual(null);
  expect(queue.tail).toEqual(null);
});
