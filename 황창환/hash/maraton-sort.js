let participant = ['leo', 'kiki', 'eden'];
let completion = ['eden', 'kiki'];
function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for (let i in participant) {
        if (participant[i] !== completion[i]) return participant[i];
    }
}
console.log(solution(participant, completion)); 