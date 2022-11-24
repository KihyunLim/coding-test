/* 
      10
  6       15
3   8        20
stack: [ 10] //right가 있으면 push
visited: [ 10]

stack: [10, 6]
visited: [10, 6]

stack: [10,6]
visited: [10,6, 3]

stack: [10] => 6 //의 right 찾아 visted에 push
visited: [10,6,3, 8]

stack: [ 15] => 10
visited: [10,6,3,8, 15]

stack: [] => 15
visited: [10,6,3,8,15, 20]

visited: [10,6,3,8,15,20]
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

  DFS_preOrder() {
    if (!this.root) {
      return undefined;
    }
/* 
    let node = this.root;
    let stack = [];
    let visited = [];

    while(node) {
      if (node.right) {
        stack.push(node);
      }
      visited.push(node.val);

      if (node.left) {
        node = node.left;
      } else {
        let stacked = stack.pop();
        node = stacked?.right;
      }
    }

    return visited;
 */
    // 솔루션
    let data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
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