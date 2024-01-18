function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var lower = "abcdefghijklmnopqrstuvwxyz".split("");
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}