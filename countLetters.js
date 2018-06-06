var result = {};

function countLetters(str) {
  str = str.split(" ").join("").toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (str[i] in result) {
      result[str[i]] += 1;
    } else {
      result[str[i]] = 1;
    }
  }
  return result;
}

console.log(countLetters("lighthouse in the house"));

