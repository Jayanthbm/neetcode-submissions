class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let counterMap = new Map();
        let currentMax = 0;
        let element = nums[0];
        for (let i = 0; i < nums.length; i++) {
            if (counterMap.has(nums[i])) {
                let tc = counterMap.get(nums[i]) + 1;
                counterMap.set(nums[i], tc);
                if (tc > currentMax) {
                    element = nums[i];
                    currentMax = tc;
                }
            } else {
                counterMap.set(nums[i], 1);
            }
        }
        return element;
    }
}
