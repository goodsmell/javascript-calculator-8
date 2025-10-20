import { isEmpty, onlyDigitsAndDelims } from './validator.js';
import { extractCustomDelimiter, splitNumbersByDelimiter } from './parser.js';
import { BASE_DELIMITERS } from './constants/delimiters.js';

function buildDelimiters(customDelimiter) {
  return [...BASE_DELIMITERS, ...(customDelimiter ? [customDelimiter] : [])];
}

/**
 * 전달받은 숫자 배열의 합계를 반환한다.
 * @param {number[]} numbers - 더할 숫자 배열
 * @returns {number} 합계
 */
export function add(numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum;
}


/**
 * 문자열 덧셈 계산기의 전체 흐름을 수행한다.
 * @param {string} input - 사용자가 입력한 문자열
 * @returns {number} 계산 결과
 */
export function result(input) {
  if (isEmpty(input)) return 0;

  const { customDelimiter, body } = extractCustomDelimiter(input);
  const delimiters = buildDelimiters(customDelimiter);

  onlyDigitsAndDelims(body, delimiters);

  const numbers = splitNumbersByDelimiter(body, delimiters);

  return add(numbers);
}
