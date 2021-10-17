let priorities = [1, 1, 9, 1, 1, 1];
let location = 0;

function solution(priorities, location) {
  var answer = 0;
  // priorities_index: 대기목록의 초기 인덱스 값 (대기문서의 ID 값이라고 생각)
  let priorities_index = [];
  for (let i = 0; i < priorities.length; i++) {
    priorities_index.push(i);
  }

  let print, print_index;
  while (priorities.length > 0) {
    // print: 대기목록의 가장 앞에 있는 문서의 우선순위
    print = priorities.shift(); //shift() = 배열 가장 앞에있는 값을 제거 후 그 값을 리턴
    console.log(print);
    // 현재 문서보다 우선순위가 높은 문서가 중간에 있는 경우 -> 대기목록 순서 변경
    console.log(priorities);
    console.log(print);
    console.log(priorities.some((priorities) => priorities > print)); // true true false...
    console.log('------------------');
    //9가 맨앞에 올때까지만 true
    if (priorities.some((priorities) => priorities > print)) {
      priorities.push(print); // 대기목록의 가장 뒤로 문서 이동
      priorities_index.push(priorities_index.shift()); // 대기목록의 ID 순서도 변경
      console.log(priorities);
      console.log('---------윗 값이 추가---------');
    }
    // 우선순위가 높은 문서가 맨 앞에 있는 경우 -> 해당 문서 출력
    else {
      answer++;
      console.log('answer = ' + answer);
      // 현재 인쇄한 문서의 ID 값이 내가 요청한 문서일 경우, 반복문 종료
      print_index = priorities_index.shift();
      console.log('print_index = ' + print_index);
      if (print_index == location) break;
    }
  }
  return answer;
}

console.log(solution(priorities, location));
