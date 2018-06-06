var result = {};

function countLetters(str) {
  str = str.split(" ").join("").toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (str[i] in result) {
      result[str[i]].count += 1;
      result[str[i]].index.push(i);
    } else {
      result[str[i]] = { count: 1, index: [i]};
    }
  }
  return result;
}

console.log(countLetters("lighthouse in the house"));

