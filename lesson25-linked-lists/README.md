# Lesson #: Linked List

## Warm-up (10 minutes)

- Can you recall any basic data structures we’ve used, like arrays or objects?
- How do arrays handle adding or removing elements in the middle?
- What are the time complexities associated with removing or adding elements?
- What could be a more flexible alternative to arrays for such operations?

## Written Question (5 minutes)

A linked list is an ordered set of data elements, each containing a link to its successor. Why might a linked list be more useful than an array in certain situations?

If you have program that relies on order, a linked list might be more useful than an array when you need to frequently insert or remove elements, especially in the middle of the list. Linked lists don't require shifting elements like arrays do, which can be more efficient when maintaining the order of elements. 

## Lecture Content (20 minutes)

**What is a Linked List?**
A linked list is a linear data structure consisting of nodes. Each node contains:

1. **Data** – the value it holds.
2. **Pointer** – a reference to the next node in the sequence.

**Types of Linked Lists**

1. **Singly Linked List**: Each node points to the next node.
2. **Doubly Linked List**: Each node points to both the next and previous nodes.
3. **Circular Linked List**: The last node points back to the first node.

**Why Use Linked Lists?**

1. Dynamic size: Unlike arrays, linked lists can grow and shrink dynamically.
2. Efficient insertions/deletions: Adding or removing elements doesn’t require shifting other elements, unlike arrays.

**Class-Based Implementation in JavaScript**
Introduce the idea of creating a linked list using classes.
**Node Class**:

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```

**LinkedList Class**:

```javascript
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.tail = newNode;
    return this;
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
```

## Problem Solving (35 minutes)

## Recap (15 minutes)

## Additional Resources

[Linked List Cycle - Floyd's Tortoise and Hare](https://www.youtube.com/watch?v=gBTe7lFR3vc)
