function solution(numbers) {
    let sum = 0;
    for (let i = 0; i < 10; i++){
        sum += numbers.includes(i) ? 0 : i;
    }
    return sum;
}