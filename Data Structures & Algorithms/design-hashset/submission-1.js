class MyHashSet {
    constructor() {
        this.table = new Uint8Array(1000001);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.table[key] = 1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.table[key] = 0;
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.table[key] === 1;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
