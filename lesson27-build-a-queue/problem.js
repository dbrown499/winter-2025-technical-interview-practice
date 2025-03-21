// Below we provided a partially completed queue with the peek and isEmpty method. Create the basic operations for a Queue
// enqueue method
    // given a value add the node to the queue and return the queue
    // if the queue is empty the new node should be the head and the tail
// dequeue method 
    // remove the head and return the new head of the element
    // if the queue is empty than return "Queue is empty"
// size method
    //  Return the number of nodes in the queue.
// clear method
    // Remove all elements from the queue.
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
      this.length = 0
    }
  
    // Add an element to the queue and return queue
    enqueue(element) {
      const newNode = new Node(element);

      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        this.length++;
        return this;
      }

      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      this.length++;
      current.next = newNode;
      this.tail = newNode;

     return this;    
    }
  
    // Remove and return the head element
    dequeue() {
      if (!this.head) {
        return "Queue is empty"; // If there is no head to the Queue then there is no Queue, return undefined  
      }


    let removedNode = this.head; // Store the current head to return later
    this.head = this.head.next; // Move head to the next node
    this.length--;
    removedNode.next = null; // Disconnect the removed node from the list

    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return this;
    }

    clear(){
      this.head = null;
      this.tail = null;
      this.length = 0;

      return this;
    }
    
    size(){

    }
    
    // View the head element
    peek() {
      if (this.isEmpty()) {
        return 'Queue is empty';
      }
      return this.head.value;
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.head === null;
    }
  }

  const createdQueue = new Queue();
  createdQueue.enqueue(1);
  createdQueue.enqueue(11);
  createdQueue.enqueue(12);
  createdQueue.enqueue(13);
  createdQueue.enqueue(14);
  createdQueue.dequeue();
  createdQueue.clear();
  console.log(createdQueue);

  module.exports = Queue;