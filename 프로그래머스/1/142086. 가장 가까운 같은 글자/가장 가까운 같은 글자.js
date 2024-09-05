function solution(s) {
    let arr = [...s];
    let result = []
    for(let i = 0; i < arr.length; i++) {
        let idx = arr.slice(0, i).reverse().indexOf(arr[i]);
        result.push(idx >= 0 ? idx + 1: -1);
    }
    return result;
}