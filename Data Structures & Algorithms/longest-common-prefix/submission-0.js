class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = "";
        if (!strs.length) return "";
        for (let i = 0; i < strs[0].length; i++) {
            let tc = 0;
            for (let j = 1; j < strs.length; j++) {
                if (strs[j][i] == strs[0][i]) {
                    tc++;
                }
            }
            if (tc == strs.length - 1) {
                result = result + strs[0][i];
            } else {
                break;
            }
        }
        return result;
    }
}
