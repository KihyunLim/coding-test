class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    let list = [];
    let node = this.head;

    while(node) {
      list.push(node.val);
      node = node.next;
    }

    return list;
  }

  push(val) {
    let node = new Node(val);

    if (this.head) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    
    let node = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = node.prev;
      node.prev = null;
      this.tail.next = null;
    }

    this.length--;

    return node;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    let node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      node.next = null;
    }

    this.length--;

    return node;
  }

  unshift(val) {
    if (this.length === 0) {
      this.push(val);
    } else {
      let node = new Node(val);
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let node = undefined;
    let center = Math.floor(this.length / 2);
    if (center - (index + 1) >= 0) {
      console.log('+');
      node = this.head;
      let i = 0;

      while(i !== index) {
        i++;
        node = node.next;
      }
    } else {
      console.log('-');
      node = this.tail;
      let i = this.length - 1;

      while(i !== index) {
        i--;
        node = node.prev;
      }
    }

    return node;
  }

  set(index, val) {
    let node = this.get(index);

    if (!node) {
      return false;
    }

    node.val = val;

    return true;
  }

  insert(index, val) {
    if (index === 0) {
      return this.unshift(val) ? true : false;
    } else if (index === this.length) {
      return this.push(val) ? true : false;
    } else {
      let find = this.get(index);
      if (!find) {
        return false;
      }

      let prev = find.prev;
      let node = new Node(val);

      node.next = find;
      find.prev = node;
      node.prev = prev;
      prev.next = node;
      this.length++;

      return true;
    }
  }

  remove(index) {
    if (index === 0) {
      return this.shift() ? true : false;
    } else if (index === this.length - 1) {
      return this.pop() ? true : false;
    } else {
      let find = this.get(index);
      if (!find) {
        return undefined;
      }

      let prev = find.prev;
      prev.next = find.next;
      find.next.prev = prev;
      find.next = null;
      find.prev = null;
      this.length--;

      return find;
    }
  }

  reverse() {
    if (this.length === 0) {
      return undefined;
    } else if (this.length === 1) {
      return this;
    } else {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
      let prev = null;
      let next = null;

      for(let i = 0; i < this.length; i++) {
        next = node.next;
        node.next = prev;
        node.prev = next;
        prev = node;
        node = next;
      }

      return this;
    }
  }
}

let list = new DoublyLinkedList();
list.push('q');
list.push('w');
list.push('e');
list.push('r');
list.print();