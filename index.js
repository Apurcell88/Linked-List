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
    let current = this.head;
    let newTail = current;
    // if there are no nodes in the list, return undefined
    if (this.length === 0) {
      return undefined;
    }
    // loop through the list until you reach the tail
    while (current.next) {
      // set the tail to be the 2nd to last node
      newTail = current;
      current = current.next;
    }
    // set the next property of the 2nd to last node to be null
    this.tail = newTail;
    this.tail.next = null;
    // decrement the length of the list by 1
    this.length--;
    // return the value of the node removed
    return current;
  }

  contains(val) {
    // returns true if the passed in value is in the list and otherwise false
    if (!this.head) return undefined;

    let current = this.head;
    while (current.next) {
      if (current.val === val) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  find(val) {
    // returns the index of the node containing value, or null if not found
    let index = 0;
    let current = this.head;

    while (index < this.length) {
      if (current.val === val) {
        return index;
      }

      current = current.next;
      index++;
    }

    return null;
  }

  toString() {
    // prints the LinkedList as strings so you can preview them in the console.
    let current = this.head;

    while (current.next) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.push('<3');
list.push('-_-');
list.push('whoa');
list.push('yay');
// console.log(list.find('...'));
