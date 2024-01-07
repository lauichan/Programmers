function solution(n) {
    let result = "";
    for (let i = 0; i < Math.floor(n / 2); i++) {
        result += "수박";
    }
    return (n % 2 === 0) ? result : result + "수";
}