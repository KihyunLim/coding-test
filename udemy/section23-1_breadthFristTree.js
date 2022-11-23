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

  BFS() {
    if (!this.root) {
      return undefined;
    }

    let data = [this.root.val];
    let visited = [];
    function recursion(arr, leaf) {
      if (arr.length === 0) {
        return;
      }

      visited.push(arr.shift());

      if (leaf.left) {
        arr.push(leaf.left.val);
      }
      if (leaf.right) {
        arr.push(leaf.right.val);
      }
    }

    recursion(data, this.root);

    return visited;
  }
  /* BFS() {
    if (!this.root) {
      return undefined;
    }

    let data = [];
    let visited = [];
    function recursion(leaf) {
      if (!leaf) {
        return;
      }

      data.push(leaf.val);
      visited.push(data.shift());

      recursion(leaf.left);
      recursion(leaf.right);
    }

    recursion(this.root);

    return visited;
  } */

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
bts.insert(10);
bts.insert(6);
bts.insert(15);
bts.insert(3);
bts.insert(8);
bts.insert(20);