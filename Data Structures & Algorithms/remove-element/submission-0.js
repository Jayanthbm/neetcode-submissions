class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let counter = 0;
        let removedCounter = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === val) {
                nums.splice(i, 1);
                i--;
                removedCounter++;
            } else {
                counter++;
            }
        }
        for (let i = 0; i < removedCounter; i++) {
            nums.push(val);
        }
        return counter;
    }
}
