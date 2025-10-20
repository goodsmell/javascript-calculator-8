import { escapeRegex } from './utils/regex.js';
import { ERROR_MESSAGE } from './constants/message.js';

export const isEmpty = (s) => s === '';

export function onlyDigitsAndDelims(str, dilims) {
  const escaped = dilims.map(escapeRegex);
  const reg = new RegExp(`^(?:[1-9]\\d*|${escaped.join('|')})+$`);
  const isValid = reg.test(str);
  
  if (!isValid) {
    throw new Error(ERROR_MESSAGE.INVALID_INPUT);
  }

  return true;
}
