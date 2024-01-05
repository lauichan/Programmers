function solution(a, b) {
    let sum = 0;
    for (i = 0; i < (Math.abs(b - a) + 1); i++) {
        sum += (Math.min(a, b) + i)
    }
    return sum;
}