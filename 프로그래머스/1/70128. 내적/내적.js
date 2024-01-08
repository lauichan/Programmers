function solution(a, b) {
    let result = a.reduce((acc, cur, i) => acc += a[i] * b[i], 0);
    return result;
}