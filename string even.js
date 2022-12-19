// 실습2) 주어진 문자열의 문자들 중, 인덱스가 짝수인 문자만 출력하도록 코드를 구현하세요.
let str = 'software engineering bootcamp';

// 변수 str에 할당된 문자열의 모든 문자를 순회하도록 for문을 작성하세요.
for (let i = 0; i < str.length; i++) {
  // false가 입력되어 있는 부분에 알맞은 조건식을 넣어야 합니다.
  if (i % 2 === 0) {
    console.log(str[i]);
  }
}
