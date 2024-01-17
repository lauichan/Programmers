function solution(k, score) {
    let arr = [];
    let result = [];
    for (let i = 0; i < score.length; i++) {
        arr.push(score[i])
        if (arr.length < k) {
            result.push(arr.sort((a,b) => b-a)[arr.length - 1]);
        } else {
            result.push(arr.sort((a,b) => b-a)[k - 1]);
        }
    }
    return result;
}