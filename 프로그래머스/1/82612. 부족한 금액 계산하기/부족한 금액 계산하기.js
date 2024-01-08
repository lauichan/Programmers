function solution(price, money, count) {
    let sum = 0;
    for (let i = 1; i <= count; i++) {
        sum += i;
    }
    return  money > price * sum ? 0 : price * sum - money;
}