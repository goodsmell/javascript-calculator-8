import { escapeRegex } from './utils/regex.js';

export const isEmpty = (s) => s === '';

export function onlyDigitsAndDelims(str, dilims) {
  const escaped = dilims.map(escapeRegex);
  const reg = new RegExp(`^(?:[1-9]\\d*|${escaped.join('|')})+$`);
  const isValid = reg.test(str);
  if (!isValid) {
    throw new Error(
      '[ERROR] 올바르지 않은 입력입니다. (커스텀 구분자 또는 ,(쉼표)와 :(콜론) 그리고 양수만 입력가능합니다.) ',
    );
  }

  return true;
}
