function solution(food) {
    let count = 0;
    let result = "";
    for(let i = 1; i < food.length; i++) {
        let item = Math.floor(food[i]/2);
        count++;
        result += (String(count).repeat(item));
    }
    let reversed = result.split('').reverse().join('');
    return result + "0".repeat(food[0]) + reversed;
}