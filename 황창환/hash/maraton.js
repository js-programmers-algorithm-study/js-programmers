let participant = ['leo', 'kiki', 'eden'];
let completion = ['eden', 'kiki'];

function solution(participant, completion) {
    const hashMap = new Map();
    participant.forEach( p => {
        const isExist = hashMap.get(p) //p값이 있는지 확인함
        if ( !isExist ) { //없으면
            hashMap.set(p,1) // key값으로 p를, value값으로 1을 줌
            return
        }
        hashMap.set(p,isExist+1) //있으면 value값 +1
    })
    for ( const c of completion ) { 
        const pNum = hashMap.get(c);//c값이 있는지 확인
        hashMap.set(c,pNum-1); //c값이 hashMap에 있으면 value를 -1
    }
    for ( const [ key, value ] of hashMap ) { //hashMap의 키,밸류값을 for문으로 돌림
        if ( value !== 0 ) { //겹치지 않으면 value가 1이 될것임
            return key //겹치지 않는값 출력
        }
    }
}

console.log(solution(participant,completion));