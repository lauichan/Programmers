function solution(s) {
    let arr = s.split("");
    let big = arr.filter((item) => item === item.toUpperCase()).sort().reverse().join("");
    let low = arr.filter((item) => item !== item.toUpperCase()).sort().reverse().join("");
    return low + big;
}