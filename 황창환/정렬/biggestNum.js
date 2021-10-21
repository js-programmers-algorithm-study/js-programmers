let numbers = [6, 10, 2];

function solution(numbers) {
  let answer = numbers
    .map((a) => String(a))
    .sort((a, b) => b + a - (a + b))
    .join('');
  console.log(answer);
  return answer[0] === '0' ? '0' : answer;
}

console.log(solution(numbers));
