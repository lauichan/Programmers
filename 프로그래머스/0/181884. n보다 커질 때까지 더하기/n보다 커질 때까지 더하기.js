function solution(numbers, n) {
    let sum = 0;
    let idx = 0;
    while (n >= sum) {
        sum += numbers[idx];
        idx++;
    }
    return sum;
}