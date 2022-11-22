class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeSearch {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    let node = this.root;

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    while(1) {
      if (val === node.val) {
        return undefined;
      } else if (val < node.val) {
        if (!node.left) {
          node.left = newNode;
          return  this;
        }

        node = node.left;
      } else {
        if (!node.right) {
          node.right = newNode;
          return this;
        }

        node = node.right;
      }
    }
  }

  find(val) {
    let node = this.root;

    if (!this.root) {
      return undefined;
    }

    while(node) {
      if (val === node.val) {
        return node;
      } else if (val < node.val) {
        node = node.left;
      } else {
        node = node.right;
      }
    }

    return undefined;
  }
}

let bts = new BinaryTreeSearch();
bts.insert(3);
bts.insert(5);
bts.insert(2);
bts.insert(4);
bts.insert(1);