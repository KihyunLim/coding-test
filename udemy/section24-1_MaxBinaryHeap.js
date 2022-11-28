/* 
            41
      39    --    33
  18  --  27  12  --
[41,39,33,18,27,12]

[41,39,33,18,27,12] <- 55

[41,39,33,18,27,12,55] 33 < 55 ?
[41,39,55,18,27,12,33]

[41,39,55,18,27,12,33] 41 < 55 ?
[55,39,41,18,27,12,33]
          55
    39    --    41
18  --  27  12  --  33
 */

class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    /* this.heap.push(val);
    
    if (this.heap.length === 1) {
      return;
    }

    this.bubbleUp(this.heap.length - 1); */

    //솔루션
    this.heap.push(val);
    this.bubbleUp();
  }

  /* bubbleUp(i) {
    let parent = Math.floor((i - 1) / 2);

    if (parent < 0) {
      return this.heap;
    } else if (this.heap[parent] >= this.heap[i]) {
      return this.heap;
    } else {
      let temp = this.heap[parent];
      this.heap[parent] = this.heap[i];
      this.heap[i] = temp;
    }

    i = parent;
    this.bubbleUp(i);

  } */
  //솔루션
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
}

let mbh = new MaxBinaryHeap();
mbh.insert(41);
mbh.insert(39);
mbh.insert(33);
mbh.insert(18);
mbh.insert(27);
mbh.insert(12);