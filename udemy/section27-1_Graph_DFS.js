class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      return;
    }

    this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1].indexOf(v2) === -1) {
      this.adjacencyList[v1].push(v2);
    }
    if (this.adjacencyList[v2].indexOf(v1) === -1) {
      this.adjacencyList[v2].push(v1);
    }
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    while(this.adjacencyList[vertex].length) {
      let v = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, v);
    }

    delete this.adjacencyList[vertex];
  }

  /* depthFirstRecursive() {
    let list = [];
    let visited = {};
    function dfs(graph, vertex) {
      if (visited[vertex]) {
        return;
      }

      visited[vertex] = true;
      list.push(vertex);

      graph[vertex].forEach((v) => {
        dfs(graph, v);
      });
    }

    dfs(this.adjacencyList, 'A');

    return list;
  } */
  //솔루션
  depthFirstRecursive(start) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) {
          return dfs(v);
        }
      });
    })(start);

    return result;
  }

  depthFirstIterative() {
    let stack = [];
    let list = [];
    let visited = {};

    stack.push('A');
    while(stack.length > 0) {
      let vertex = stack.pop();

      if (!visited[vertex]) {
        stack.push(...this.adjacencyList[vertex]);
        list.push(vertex);
        visited[vertex] = true;
      }
    }

    return list;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

/* 
{
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'E'],
  D: ['B', 'E', 'F'],
  E: ['C', 'D', 'F'],
  F: ['D', 'E'],
}

depthFirstRecursive : ['A', 'B', 'D', 'E', 'C', 'F']
depthFirstIterative : ['A', 'C', 'E', 'F', 'D', 'B']
 */