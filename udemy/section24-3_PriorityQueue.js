/* 
우선 순위 큐
 */

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.heap.push(newNode);
    this.bubbleUp();
  }

  bubbleUp(){
    let idx = this.heap.length - 1;
    const element = this.heap[idx];
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1)/2);
      let parent = this.heap[parentIdx];
      if(element.priority >= parent.priority) break;
      this.heap[parentIdx] = element;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    // 솔루션
    const min = this.heap[0];
    const end = this.heap.pop();
    if(this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while(true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.heap[idx] = this.heap[swap];
      this.heap[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let pq = new PriorityQueue();
pq.enqueue('common cold', 5);
pq.enqueue('gunshot wound', 1);
pq.enqueue('high fever', 4);
pq.enqueue('broken arm', 2);
pq.enqueue('glass in foot', 3);