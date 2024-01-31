function solution(wallpaper) {
    let arrLux = [];
    let arrLuy = [];
    let arrRdx = [];
    let arrRdy = [];
    for (let i = 0; i<wallpaper.length; i++) {
        let luy = wallpaper[i].indexOf("#")
        let rdy = wallpaper[i].lastIndexOf("#")
        if (luy > -1) {
            arrLux.push(i)
            arrLuy.push(luy);
        }
        if (rdy > -1) {
            arrRdx.push(i);
            arrRdy.push(rdy)
        }
    }
    return [arrLux[0],Math.min(...arrLuy),Math.max(...arrRdx) + 1,Math.max(...arrRdy) + 1]
}