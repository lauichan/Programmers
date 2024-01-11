function solution(sizes) {
    let sortedSizes = sizes.map((i) => i.sort((a,b)=> b-a));
    let w = []
    let h = []
    sizes.forEach((i) => {
        w.push(i[0]);
        h.push(i[1]);
    })
    return Math.max(...w) * Math.max(...h)
}