function solution(X, Y) {
    let arrX = [0,0,0,0,0,0,0,0,0,0];
    let arrY = [0,0,0,0,0,0,0,0,0,0];
    for (let i = 0; i < X.length; i++) {
        arrX[X[i]] += 1;
    }
    for (let j = 0; j < Y.length; j++) {
        arrY[Y[j]] += 1;
    }
    let result = "";
    for (let k = 9; k >= 0; k--) {
        result += String(k).repeat(Math.min(arrX[k], arrY[k]));
    }
    if (result[0] === "0") return "0";
    return (result === "") ? "-1" : result; 
}