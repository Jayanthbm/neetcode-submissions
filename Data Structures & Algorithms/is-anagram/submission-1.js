class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
         if (s.length !== t.length) {
    return false;
  }
  let map1 = {};
  let map2 = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map1) {
      map1[s[i]] = map1[s[i]] + 1;
    } else {
      map1[s[i]] = 1;
    }
    if (t[i] in map2) {
      map2[t[i]] = map2[t[i]] + 1;
    } else {
      map2[t[i]] = 1;
    }
  }

  for (let k = 0; k < s.length; k++) {
    let svalue = s[k];
    let tvalue = t[k];
    if (map1[tvalue] == undefined || map2[svalue] == undefined) {
      return false;
    }

    if (map1[svalue] !== map2[svalue] || map1[tvalue] !== map2[tvalue]) {
      return false;
    }
  }
  return true;
    }
}
