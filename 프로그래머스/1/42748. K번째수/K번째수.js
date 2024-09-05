function solution(array, commands) {
    let result = [];
    for (let i = 0; i < commands.length; i++) {
        let start = commands[i][0] - 1;
        let end = commands[i][1];
        let idx = commands[i][2] - 1;
        let sort = array.slice(start, end).sort((a,b) => a-b);
        result.push(sort[idx]);
    }
    return result;
}