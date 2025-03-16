const LinkedList = require("./problem");

const createLinkedList = () => {
  const list = new LinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  return list;
};

test("Get returns the node at the given index", () => {
  const list = createLinkedList();
  expect(list.get(0).data).toEqual(1);
  expect(list.get(1).data).toEqual(2);
  expect(list.get(2).data).toEqual(3);
});
test("Get returns undefined if index is less than 0 or greater than or equal to the length", () => {
  const list = createLinkedList();
  expect(list.get(-1)).toEqual(undefined);
  expect(list.get(3)).toEqual(undefined);
});
test("Pop removes the last node in the list", () => {
  const list = createLinkedList();
  expect(list.pop().data).toEqual(2);
});
test("Pop returns undefined if the list is empty", () => {
  const emptyList = new LinkedList();
  expect(emptyList.pop()).toEqual(undefined);
});
test("Shift removes the head of the list and returns the new head", () => {
  const list = createLinkedList();
  expect(list.shift().data).toEqual(2);
});
test("Shift returns undefined if the list is empty", () => {
  const emptyList = new LinkedList();
  expect(emptyList.shift()).toEqual(undefined);
});
test("Unshift takes a value and adds the new node to the list as the head node", () => {
  const list = createLinkedList();
  expect(list.unshift(11).head.data).toEqual(11);
});
test("Unshift adds the new node as the head and the tail if the list is empty", () => {
  const emptyList = new LinkedList();
  expect(emptyList.unshift(11).head.data).toEqual(11);
  expect(emptyList.unshift(11).tail.data).toEqual(11);
});
test("Remove the node at the given index and return the new node at that index", () => {
  const list = createLinkedList();
  expect(list.remove(1).data).toEqual(3);
});
test("Remove returns undefined if the list is empty or the index is greater than or equal to the length", () => {
  const emptyList = new LinkedList();
  expect(emptyList.remove(1)).toEqual(undefined);
});
