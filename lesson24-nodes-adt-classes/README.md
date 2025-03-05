# Lesson #: Nodes (Abstract Data Types)

## Warm-up (10 minutes)

Create a simple diagram of a family tree. How would you represent this with code?

## Written Question (5 minutes)

In your own words, what are the advantages of encapsulating code in classes rather than just having the code in the global scope? Write a short response.

Classes are reusable and different instances could be inplemented without discrupting an entire program.

## Lecture Content (20 minutes)

1. What Are Nodes?

- A node is a container that holds data and often links (or references) to other nodes.
- Example applications:
  - Linked lists: Each node points to the next.
  - Trees: Each node can have multiple child nodes.
  - Graphs: Nodes can reference other nodes in complex patterns.

2. Why Use Classes for Nodes?

- **Encapsulation**: Combine data (properties) and operations (methods).
- **Reusability**: Create many nodes efficiently.
- **Clear Structure**: Define what each node should look like.

3. Creating a Basic Node Class
   Here’s how we can create a basic node class in JavaScript:

```javascript
class Node {
  constructor(data) {
    this.data = data; // Data the node holds
    this.next = null; // Reference to the next node (for linked lists)
  }
}
```

- `constructor`: Initializes the `data` and sets the `next` reference to `null`.

4. Example: Creating and Linking Nodes

```javascript
// Create individual nodes
const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);

// Link the nodes
node1.next = node2;
node2.next = node3;

// Print the chain
let current = node1;
while (current) {
  console.log(current.data); // Outputs: 10, 20, 30
  current = current.next;
}
```

## Problem Solving (35 minutes)

### Reverse Node Links

## Recap (15 minutes)

1. Nodes can be used in various contexts: linked lists, trees, or even as standalone structures.
2. Reversing node links is a common and valuable exercise in understanding references.
3. Nodes can hold more than one reference (e.g., left and right children), enabling hierarchical structures like trees.

## Additional Resources

- [Linked List - Beau teaches JavaScript](https://www.youtube.com/watch?v=9YddVVsdG5A)
