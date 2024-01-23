function solution(k, m, score) {
    score.sort((a,b) => b-a)
    let result = 0;
    for (let i = 0; i < score.length; i+=m) {
        let item = score.slice(i, i+m)
        if (item.length === m) {
            result += item[item.length - 1] * m   
        }
    }
    return result;
}
