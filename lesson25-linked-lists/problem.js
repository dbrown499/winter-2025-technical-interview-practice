// Below we provided a partially completed linked list with the push and display method. Create the basic operations for a linked list
// get method
    // given an index return the node at that index
    // if the index is less than zero or greater or equal to the length return null
    // return the node once found
// pop method 
    // removes the last node in the linked list and returns the new tail;
    // if the linked list is empty than return undefined
// shift method
    // if the linked list is empty return undefined
    // removed the first node in the linked list
    // returns the new head
// unshift method
    // takes a value and add the new node to the linked list
    // the head should be the new node
    // return the linked list
// insert method
    // given an index add a new node at that index
    // return linked list
// remove method
    // given an index remove the node at that index
    // return the node now at that index


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      // console.log(this.head = newNode);
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  shift() {

    if (!this.head) {
      return undefined; // If there is no head to the linked list then there is no linked list, return undefined  
    }

    let removedNode = this.head; // Store the current head to return later
    this.head = this.head.next; // Move head to the next node
    removedNode.next = null; // Disconnect the removed node from the list

    return this.head
           // OR
    // return this.head.data
  }

  unshift(data) {
    const newNode = new Node(data); // Use data to create the new node 

    if(!this.head){ // If linked list is empty 
      this.head = newNode; // Make head the newNode
      this.tail = newNode; // Make tail the newNode
      return this; 
    }
////////My First thought process, a bit redundant but works//////////////
  //   let currentLinkedList = this.head;
  //   this.head = newNode;
  //   this.head.next = currentLinkedList;

  newNode.next = this.head; // Get newNode & set the next information to be the existing linked list
  this.head = newNode; // Confirm the head is updated to the new node


    return this;
  }

  pop() {
    if (!this.head) {
      return undefined; // If there is no head to the linked list then there is no linked list, return undefined  
    }

    if (!this.head.next) {
      this.head = null; // If there's only one node, remove it
      return undefined; // If there is no head to the linked list then there is no linked list, return undefined  
    }

    let current = this.head;
    while (current.next.next !== null) { // Find second-to-last node
      current = current.next; // Traverse to the second-to-last node 
    }
    current.next = null; // Get second-to-last node and set its next node to null, it will remove the very last node 

    return current; // return last node 
    }

  get(index) {
    let current = this.head;
    let num = 0;


    
    // Traverse the list and check each node's data
    while (current) {
      if (index === num) {
        return current;
      }
      current = current.next;  // Move to the next node
      num++;  // Increment the index
    }

    // If the data is not found, return -1
    return undefined;
  }



  insert(index, data) {
    const newNode = new Node(data); // Create the new node
    
    // Case 1: Insert at the beginning (index 0)
    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    let current = this.head;
    let num = 0;

    // Traverse to the node before the target index
    while (current && num < index - 1) {
        current = current.next;
        num++;
    }

    // If index is out of bounds (greater than list length)
    if (!current) {
        return undefined;
    }

    // Insert the new node at the correct position
    newNode.next = current.next;
    current.next = newNode;

    return this.head;
}


  remove(index) {
      // Case 1: If the list is empty
      if (!this.head) {
          return undefined;
      }
  
      // Case 2: Remove the head node
      if (index === 0) {
          this.head = this.head.next;
          return;
      }
  
      let current = this.head;
      let num = 0;
  
      // Traverse the list to find the node before the target
      while (current.next && num < index - 1) {
          current = current.next;
          num++;
      }
  
      // If index is out of bounds
      if (!current.next) {
          return undefined;
      }
  
      // Remove the target node by skipping it
      current.next = current.next.next;

      return current.next;
  }
  


  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let linkList = new LinkedList();
linkList.push(1);
linkList.push(2);
linkList.push(3);
linkList.push(4);
linkList.insert(2, 15);
linkList.remove(1);
linkList.pop();
linkList.shift();
linkList.unshift(10);
linkList.get(2);
linkList.display();

module.exports = LinkedList;
