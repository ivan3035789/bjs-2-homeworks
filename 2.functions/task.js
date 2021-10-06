// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;
    min = Math.min(...arr);
    max = Math.max(...arr);
    sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    } 
    else if (min > arr[i]) {
      min = arr[i];
    }
    sum += arr[i]
  }
  avg = sum / arr.length
  return { min : min, max : max, avg : +avg.toFixed(2) };
}

// // Задание 2
const worker = function(arr) {
  let maxWorker;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    maxWorker = Math.max(arr[i]);
    if (sum > maxWorker){
      maxWorker = sum;
    }
    else {
      maxWorker = maxWorker;
    }
  }
  return maxWorker; 
}

function makeWork(arrayOfArrays, func) {
  let max = -Infinity;

  for (let i = 0; i < arrayOfArrays.length; i++) {
    let result = func(arrayOfArrays[i]);
    if (result > max){
      max = result;
    }
    else {
      max = max
    }
  }
 return max;
}

// // Задание 3

function worker2(arr) {
  let maxWorker2 = -Infinity;
  let minWorker2 = Infinity;

  for (let item in arr){
    if (maxWorker2 < item){
      maxWorker2 = arr[item];
    }
    if (item < minWorker2) {
      minWorker2 = arr[item];
    }
    else {
      maxWorker2 = maxWorker2;
      minWorker2 = minWorker2;
    }
  }
  let difference = Math.abs(maxWorker2 - minWorker2);
  return difference;
}