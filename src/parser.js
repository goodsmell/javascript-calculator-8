import { makeDelimiterRegex } from './utils/regex.js';

const CUSTOM_DELIMITER = /^\/\/(.+)(?:\n|\\n)/;


/**
 * 입력 문자열에서 커스텀 구분자를 추출한다.
 * @param {string} input - 입력 문자열 (예: "//;\n1;2;3")
 * @returns {{ customDelimiter: string|null, body: string }} 
 * 추출된 커스텀 구분자와 본문(body)
 */
export function extractCustomDelimiter(input) {
  const match = input.match(CUSTOM_DELIMITER);

  if (!match) return { customDelimiter: null, body: input };

  const customDelimiter = match[1];
  const body = input.slice(match[0].length);

  return { customDelimiter, body };
}

/**
 * 구분자를 기준으로 문자열을 분리해 숫자 배열로 변환한다.
 * @param {string} body - 숫자 문자열 (예: "1,2:3")
 * @param {string[]} delims - 구분자 목록 (예: [",", ":", ";"])
 * @returns {number[]} 숫자 배열 (예: [1,2,3])
 */
export function splitNumbersByDelimiter(body, delims) {
  const reg = makeDelimiterRegex(delims);
  const tokens = body.split(reg);

  return tokens.map((t) => Number(t));
}
