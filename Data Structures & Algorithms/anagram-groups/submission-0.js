class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for (let i = 0; i < strs.length; i++) {
            let sorted = strs[i].split('').sort().join('');
            if (sorted in map) {
                let tmp = map[sorted];
                tmp.push(strs[i])
                map[sorted] = tmp;
            } else {
                map[sorted] = [strs[i]];
            }
        }
        return Object.values(map);
    }
}
