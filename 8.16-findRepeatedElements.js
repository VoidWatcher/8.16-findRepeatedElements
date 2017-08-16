function findRepeatedElements (arr) {
  let repeatedElements = [];
  for (let value of arr) {
    if (arr.indexOf(value) != arr.lastIndexOf(value) && repeatedElements.indexOf(value) == -1) {
      repeatedElements.push(value);
    }
  }
  return repeatedElements;
}

console.log(findRepeatedElements(['a', 'ab', 'ed', 'da', 'a', 'ed', 'b']));