import { result, add } from '../src/calculator.js';

describe('add - 숫자 배열 합산', () => {
  test.each([
    [[1, 2, 3], 6],
    [[10, 20, 30], 60],
    [[5], 5],
    [[], 0],
  ])('%j → %i', (input, expected) => {
    expect(add(input)).toBe(expected);
  });
});

describe('result - 문자열 덧셈 계산기 통합 테스트', () => {
  // ✅ 정상 케이스
  test.each([
    ['', 0], // 빈 문자열 → 0
    ['1,2,3', 6], // 쉼표 구분자
    ['1:2:3', 6], // 콜론 구분자
    ['1,2:3', 6], // 혼합
    ['//;\n1;2;3', 6], // 커스텀 구분자 ;
    ['//***\n1***2***3', 6], // 커스텀 구분자 ***
    ['//.\n3', 3], // 단일 숫자
  ])('"%s" → %i', (input, expected) => {
    expect(result(input)).toBe(expected);
  });

  // ❌ 예외 케이스
  test.each([
    ['a,2,3'], // 문자 포함
    ['1,2,3!'], // 특수문자
    ['//;\n1;2;0'], // 0 포함
    ['//;\n1;-2;3'], // 음수 (선택적으로)
  ])('"%s" → [ERROR] 발생', (input) => {
    expect(() => result(input)).toThrow('[ERROR]');
  });
});
