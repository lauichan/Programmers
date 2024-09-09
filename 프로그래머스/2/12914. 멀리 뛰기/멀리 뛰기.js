function solution(n) {
    let arr = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        arr.push((arr.at(-1) + arr.at(-2)) % 1234567);
    }
    return arr[n];
}