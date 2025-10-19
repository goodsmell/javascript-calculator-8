import { isEmpty, onlyDigitsAndDelims } from '../src/validator.js';

describe('validator - 입력값 처리', () => {
  test('빈 문자열인가?', () => {
    expect(isEmpty('')).toBe(true);
  });
});

describe('onlyDigitsAndDelims - 문자 집합 검증', () => {
  test.each([
    ['1,2,3', [',', ':']],
    ['1:2,3', [',', ':']],
    ['123', [',', ':']],
    ['1***2***3', ['***', ',', ':']],
    ['1,2:3***4', [',', ':', '***']],
  ])('정상 "%s"는 throw 안 함', (input, delims) => {
    expect(() => onlyDigitsAndDelims(input, delims)).not.toThrow();
  });

  test.each([
    ['1;2;3', [',', ':']], // 허용 안된 ;
    ['a,2,3', [',', ':']], // 알파벳
    ['1,2,3!', [',', ':']], // 특수문자
    [' ', [',', ':']], // 공백
    ['0', [',', ':']], // 0
    ['-2', [',', ':']], // 음수
  ])('잘못된 "%s"는 [ERROR]', (input, delims) => {
    expect(() => onlyDigitsAndDelims(input, delims)).toThrow('[ERROR]');
  });
});
