/* 
      10
  6       15
3   8        20
queue: [10]
visited: []


queue: []
visited: [10]

queue: [ 6,15]
visited: [10]


queue: [15]
visited: [10, 6]

queue: [15, 3,8]
visited: [10,6]


queue: [3,8]
visited: [10,6, 15]

queue: [3,8, 20]
visited: [10,6,15]


queue: [8,20]
visited: [10,6,15, 3]
//

queue: [20]
visited: [10,6,15,3, 8]
//

queue: []
visited: [10,6,15,3,8, 20]
//

visited: [10,6,15,3,8,20]
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

  BFS() {
    let data = [];
    let visited = [];
    let node = this.root;

    if (this.root) {
      data.push(this.root.val);
    } else {
      return undefined;
    }

    //
  }
}

let bts = new BinaryTreeSearch();
bts.insert(10);
bts.insert(6);
bts.insert(15);
bts.insert(3);
bts.insert(8);
bts.insert(20);