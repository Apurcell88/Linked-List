class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  size() {
    return this.length;
  }

  head() {
    // returns the first node
    return this.head;
  }

  tail() {
    // returns the last node
    return this.tail;
  }

  at(index) {
    // returns the node at the given index
    if (index < 0 || index > this.length) return false;

    let counter = 0;
    let currentNode = this.head;

    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  pop() {
    // removes the last element from the list
  }
}

const list = new LinkedList();
list.push('<3');
list.push('-_-');
list.push('whoaaaa');
// console.log(list);
