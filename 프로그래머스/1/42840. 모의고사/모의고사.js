 
 	
function solution(answers) {
    let pick = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    var count = [0,0,0]
    
    for(let i = 0; i < answers.length; i++){
        if (answers[i] === pick[0][i%5]) count[0]++;
        if (answers[i] === pick[1][i%8]) count[1]++;
        if (answers[i] === pick[2][i%10]) count[2]++;
    }

    let max = Math.max(...count);
    let result = []
    for(let j = 0; j < count.length; j++){
        if (max===count[j]) result.push(j+1);
    }
    return result;
}