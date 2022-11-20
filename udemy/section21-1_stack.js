class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
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

  push(val) {
    let node = new Node(val);

    if (this.first) {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    } else {
      this.first = node;
      this.last = node;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    } else if (this.size === 1) {
      this.last = null;
    }

    let node = this.first;
    this.first = this.first.next;
    this.size--;

    return node;
  }
}