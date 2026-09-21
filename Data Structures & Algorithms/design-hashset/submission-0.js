class MyHashSet {
    constructor() {
        this.numBuckets = 769;
        this.buckets = Array.from({ length: this.numBuckets }, () => []);
    }

    /**
 * @param {number} key
 * @return {number}
 */

    _hash = function (key) {
        return key % this.numBuckets;
    };
    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const bucket = this.buckets[this._hash(key)];
        if (!bucket.includes(key)) {
            bucket.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const bucket = this.buckets[this._hash(key)];
        const index = bucket.indexOf(key);
        if (index !== -1) {
            bucket[index] = bucket[bucket.length - 1];
            bucket.pop();
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const bucket = this.buckets[this._hash(key)];
        return bucket.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
