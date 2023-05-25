// 가장 먼저 반복되는 원소의 값
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
}

function solution2(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      return arr[i];
    } else {
      obj[arr[i]] = i;
    }
  }
  return undefined;
}

solution([3, 2, 4, 5, 2, 1, 0, 3]);
solution2([3, 2, 4, 5, 2, 1, 0, 3]);