function solution(n) {
    let str = n.toString();
    return Number([...str].sort((a,b)=>b-a).join(""))
}