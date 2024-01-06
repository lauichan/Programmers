function solution(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== Math.min(...arr)) {
            result.push(arr[i]);
        }
    }
    return result.length === 0 ? [-1] : result ;
}