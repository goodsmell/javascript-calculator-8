import { isEmpty, onlyDigitsAndDelims } from '../src/validator.js';
import { BASE_DELIMITERS } from '../src/constants/delimiters.js';

describe('validator - 입력값 처리', () => {
  test('빈 문자열인가?', () => {
    expect(isEmpty('')).toBe(true);
  });
});

describe('onlyDigitsAndDelims - 문자 집합 검증', () => {
  test.each([
    ['1,2,3', [...BASE_DELIMITERS]],
    ['1:2,3', [...BASE_DELIMITERS]],
    ['123', [...BASE_DELIMITERS]],
    ['1***2***3', [...BASE_DELIMITERS, '***']],
    ['1,2:3***4', [...BASE_DELIMITERS, '***']],
  ])('정상 "%s"는 throw 안 함', (input, delims) => {
    expect(() => onlyDigitsAndDelims(input, delims)).not.toThrow();
  });

  test.each([
    ['1;2;3', [...BASE_DELIMITERS]], // 허용 안된 ;
    ['a,2,3', [...BASE_DELIMITERS]], // 알파벳
    ['1,2,3!', [...BASE_DELIMITERS]], // 특수문자
    [' ', [...BASE_DELIMITERS]], // 공백
    ['0', [...BASE_DELIMITERS]], // 0
    ['-2', [...BASE_DELIMITERS]], // 음수
  ])('잘못된 "%s"는 [ERROR]', (input, delims) => {
    expect(() => onlyDigitsAndDelims(input, delims)).toThrow('[ERROR]');
  });
});
