import { escapeRegex } from './utils/regex.js';
import { ERROR_MESSAGE } from './constants/message.js';

const POSITIVE_NUMBER_PATTERN = '[1-9]\\d*';

export const isEmpty = (s) => s === '';

/**
 * 문자열이 숫자와 허용된 구분자로만 구성되었는지 검증한다.
 * @param {string} str - 입력 문자열
 * @param {string[]} delims - 허용된 구분자 배열
 * @throws {Error} 잘못된 입력일 경우 ERROR_MESSAGE를 포함한 Error를 발생시킴
 */
export function onlyDigitsAndDelims(str, delims) {
  const escaped = delims.map(escapeRegex);
  const reg = new RegExp(`^(?:${POSITIVE_NUMBER_PATTERN}|${escaped.join('|')})+$`);
  const isValid = reg.test(str);

  if (str.includes('0')) {
    throw new Error(ERROR_MESSAGE.ZERO_NOT_ALLOWED);
  }

  if (!isValid) {
    throw new Error(ERROR_MESSAGE.INVALID_INPUT);
  }
}
