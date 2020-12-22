export class TouchHandler {
  static touchedElementIndexes = {};
  static touchedElementIndexesLength = 0;

  static getKey () {
    return Math.random().toString(36).substring(7);
  }

  static insertElement() {
    let key = this.getKey();
    this.touchedElementIndexes[key] = this.touchedElementIndexesLength;
    this.touchedElementIndexesLength += 1;
    return key;
  }

  static getIndex(key) {
    return this.touchedElementIndexes[key];
  }

  static removeElement(key) {
    Object.keys(this.touchedElementIndexes).map(value => {
      if (value > this.touchedElementIndexes[key]) return value -= 1;
    })
    delete this.touchedElementIndexes[key];
    this.touchedElementIndexesLength -= 1;
  }
}
