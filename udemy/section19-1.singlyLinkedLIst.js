class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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

  travles() {
    let cur = this.head;

    while (cur) {
      console.log(cur.val);
      cur = cur.next;
    }

    console.log('---');
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let cur = this.head;
    let prev = cur;

    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return cur;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let node = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return node;
  }

  unshift(val) {
    if (!this.head) {
      this.push(val);
      return this;
    }

    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let count = 0;
    let target = this.head;
    while (count !== index) {
      target = target.next;
      count++;
    }

    return target;
  }

  set(index, val) {
    let target = this.get(index);

    if (!target) {
      return false;
    }

    target.val = val;

    return true;
  }

  insert(index, val) {
    if (index === 0) {
      return this.unshift(val) ? true : false;
    } else if (index === this.length) {
      return this.push(val) ? true : false;
    } else {
      let prev = this.get(index - 1);

      if (!prev) {
        return false;
      }

      let newNode = new Node(val);
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;

      return true;
    }
  }

  remove(index) {
    let target = this.get(index);

    if (!target) {
      return undefined;
    }

    if (index === this.length - 1) {
      return this.pop();
    } else if (index === 0) {
      return this.shift();
    } else {
      let prev = this.get(index - 1);

      prev.next = target.next;
      target.next = null;
      this.length--;

      return target;
    }
  }

  reverse() {
    if (!this.head) {
      return undefined;
    } else if (this.length === 1) {
      return this;
    } else {
      // ?
    }
  }
}

const list = new SinglyLinkedList();
list.push('q');
list.push('w');
list.push('e');
list.push('r');
list.travles();
list.pop();
list.travles();
list.pop();
list.pop();
list.pop();
list.travles();
list.pop();
list.travles();
list.push('t');
list.push('y');
list.travles();
list.shift();
list.unshift('a');