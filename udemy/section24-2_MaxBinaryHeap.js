/* 
          55
    39    --    41
18  --  27  12  --  33
[55,39,41,18,27,12,33]

[33,39,41,18,27,12] -> 55
          33
    39    --    41
18  --  27  12  --  

[33,39,41,18,27,12] 39 > 41 ?? 33 < 39 || 33 < 41 ??
          41
    39    --    33
18  --  27  12  -- 
[41,39,33,18,27,12] 
 */

class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  bubbleUp(){
    let idx = this.heap.length - 1;
    const element = this.heap[idx];
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1)/2);
      let parent = this.heap[parentIdx];
      if(element <= parent) break;
      this.heap[parentIdx] = element;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    /* let popped = this.heap[0];
    this.heap[0] = this.heap.pop();

    if (this.heap.length < 2) {
      if (this.heap[0] === popped) {
        this.heap = [];
      }
      
      return popped;
    }

    let i = 0;
    let large = 0;
    if (this.heap.length === 2) {
      large = 1;
    } else {
      if (this.heap[(2 * i) + 1] > this.heap[(2 * i) + 2]) {
        large = (2 * i) + 1;
      } else {
        large = (2 * i) + 2;
      }
    }
    
    while(this.heap[large] > this.heap[i]) {
      let temp = this.heap[large];
      this.heap[large] = this.heap[i];
      this.heap[i] = temp;

      if (this.heap.length === 2) {
        break;
      }
      i = large;
      if (this.heap[(2 * i) + 1] > this.heap[(2 * i) + 2]) {
        large = (2 * i) + 1;
      } else {
        large = (2 * i) + 2;
      }
    }

    return popped; */

    // 솔루션
    const max = this.heap[0];
    const end = this.heap.pop();
    if(this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }
    return max;
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
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

let mbh = new MaxBinaryHeap();
mbh.insert(41);
mbh.insert(39);
mbh.insert(33);
mbh.insert(18);
mbh.insert(27);
mbh.insert(12);