function solution(left, right) {
    let result = 0;
    for (let i = left; i < right + 1; i++) {
        let count = 1;
        for (let j = 0; j < i; j++) {
            if (i % j == 0) count ++;
        }
        count % 2 === 0 ? result += i : result -= i;
    }
    return result;
}