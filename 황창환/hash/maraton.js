let participant = ['leo', 'kiki', 'eden'];
let completion = ['eden', 'kiki'];

function solution(participant, completion) {
    const hashMap = new Map();
    participant.forEach( p => {
        const isExist = hashMap.get(p)
        console.log(isExist)
        if ( !isExist ) {
            hashMap.set(p,1)
            console.log(hashMap)
            return
        }
        hashMap.set(p,isExist+1)
    })
    for ( const c of completion ) {
        const pNum = hashMap.get(c);
        hashMap.set(c,pNum-1);
        console.log(hashMap)
    }
    for ( const [ key, value ] of hashMap ) {
        if ( value !== 0 ) {
            return key
        }
    }
}

console.log(solution(participant,completion));