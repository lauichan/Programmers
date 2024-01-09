function solution(arr1, arr2) {
    let arr =[];
    for (let i = 0; i < arr1.length; i++) {
        arr[i] = [];
        for(let j = 0; j < arr1[i].length; j++) {
            arr[i][j] = arr1[i][j] + arr2[i][j];
        }
        
    }
    return arr;
}