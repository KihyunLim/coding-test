/* 
      10
  6       15
3   8        20
visited: [3,6,8,10,15,20]
*/

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

  DFS_inOrder() {
    if (!this.root) {
      return undefined;
    }

    // 솔루션
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }
}

let bts = new BinaryTreeSearch();
bts.insert(10);
bts.insert(6);
bts.insert(15);
bts.insert(3);
bts.insert(8);
bts.insert(20);