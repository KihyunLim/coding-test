class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  print() {
    let list = [];
    let node = this.first;

    while(node) {
      list.push(node.val);
      node = node.next;
    }

    return list;
  }

  enqueue(val) {
    let node = new Node(val);

    if (this.first) {
      this.last.next = node;
      this.last = node;
    } else {
      this.first = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) {
      return null;
    } else if (this.size === 1) {
      this.last = null;
    }

    let temp = this.first;
    this.first = this.first.next;
    this.size--;

    return temp;
  }
}