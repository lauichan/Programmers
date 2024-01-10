function solution(s) {
  let result = []
  s.split(" ").forEach((word) => {
    let str = ""
    for (let i = 0; i < word.length; i++) {
      str += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
    }
    result.push(str);
  });
  return result.join(" ");
}