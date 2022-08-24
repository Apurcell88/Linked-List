const Node = (value = null, nextNode = null) => ({
  // returns an object
  value,
  nextNode,
});

const LinkedList = () => {
  let head = null;
  let size = 0;

  const append = (value) => {
    const newNode = Node(value);
    if (head === null) { // if there is no head
      head = newNode; // create a node for the head
    } else { // if there is a head
      let pointer = head; // set pointer to it
      while (pointer.nextNode !== null) { // if there is another node
        pointer = pointer.nextNode; // set pointer to that next node
      }
      pointer.nextNode = newNode; // create that next node
    }
    size++; // increase the size of the linked list
  };

  const prepend = (value) => {
    const newNode = Node(value);
    head = newNode;
    size++;
  };

  const sizeCount = () => size;

  const getHead = () => {
    if (head === null) {
      alert('There is no linked list!');
    }
    return head;
  };

  const getTail = () => {

  };
};
