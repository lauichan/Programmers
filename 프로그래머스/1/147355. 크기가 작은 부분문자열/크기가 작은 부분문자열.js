function solution(t, p) {
  let partStr = [];
  for (let i = 0; i < t.length - p.length + 1; i++) {
    partStr.push(t.slice(i, i + p.length));
  }
  console.log(partStr);
  let count = 0;
  for (let j = 0; j < partStr.length; j++) {
    if (partStr[j] <= p) count++;
  }
  return count;
}