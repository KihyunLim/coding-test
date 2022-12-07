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
}

let g = new Graph();
g.addVertex("seoul");
g.addVertex("tokyo");
g.addVertex("hongkong");
g.addVertex("la");
g.addVertex("dallas");

g.addEdge('seoul', 'tokyo');
g.addEdge('seoul', 'hongkong');
g.addEdge('tokyo', 'la');