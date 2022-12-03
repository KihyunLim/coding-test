class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      return undefined;
    }

    let value = this.keyMap[index].find((v) => v[0] === key);
    if (value) {
      return value[1];
    } else {
      return undefined;
    }
  }

  values() {
    let valueArr = [];
    
    for(let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          if (!valueArr.includes(this.keyMap[i][j][1])) {
            valueArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return valueArr;
  }

  keys() {
    let keysArr = [];
    
    for(let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return keysArr;
  }
}

let ht = new HashTable();
ht.set('hello', 'new wolrd');
ht.set('hi', 'bye');
ht.set('opening', 'soon');
ht.set('home', 'plus');
ht.set('logitech', 'mouse');