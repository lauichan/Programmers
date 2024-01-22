function solution(babbling) {
    let newba = babbling.map((b)=> 
                             b.replaceAll("aya",1).replace("11","z")
                             .replaceAll("ye",2).replace("22","z")
                             .replaceAll("woo",3).replace("33","z")
                             .replaceAll("ma",4).replace("44","z"));
                            
    console.log(newba);
    let count = 0;
    for (let i = 0; i < newba.length; i++) {
        if (newba[i] % 1 === 0) { 
            count++;
        }
    }
    return count;
}