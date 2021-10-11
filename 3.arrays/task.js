function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length !== arr2.length) return false;
  arr1.every((item,idx) => {
    result = item === arr2[idx]
  });
  return result; 
}

function advancedFilter(arr) {
  let resultArr = arr.filter((item) => item > 0).filter(item => (item % 3 === 0 )).map(item => (item * 10));
  return resultArr; 
}