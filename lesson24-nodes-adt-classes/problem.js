// Write a function that takes the head node of a manually linked set of nodes. Reverse the direction of the next pointers and return the new head node
// input: 1 -> 2 -> 3 -> null output: 3 -> 2 -> 1 -> null
// input: 1 -> null output: 1 -> null

// head will not be null;

function reverseNodes(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next; // Store next node
    current.next = prev; // Reverse the link
    prev = current; // Move prev forward
    current = next; // Move current forward
  }

  return prev; // New head
}

module.exports = reverseNodes;
