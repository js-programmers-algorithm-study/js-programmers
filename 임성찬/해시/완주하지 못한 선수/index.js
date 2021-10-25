function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for(var i=0;i<participant.length;i++){
    if(participant[i] !== completion[i]){
      let answer = participant[i];
      return console.log("완주하지 못한 선수는", answer);
    }
  }
};

let participant1 = ["leo", "kiki", "eden"];
let completion2 = ["kiki", "eden"];

solution(participant1, completion2);