function solution(players, callings) {
    let obj = {}
    players.forEach((e, i) => obj[e] = i)
    
    for (let i = 0; i < callings.length; i++) {
        let idx = obj[callings[i]]
        
        let temp = players[idx];
        players[idx] = players[idx-1];
        players[idx-1] = temp;

        obj[players[idx-1]]-=1
        obj[players[idx]]+=1
    }
    return players
}