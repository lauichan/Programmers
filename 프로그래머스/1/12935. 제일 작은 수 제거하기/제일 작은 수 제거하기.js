function solution(arr) {
    let result = [];
    let min = Math.min(...arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== min) {
            result.push(arr[i]);
        }
    }
    return result.length === 0 ? [-1] : result ;
}