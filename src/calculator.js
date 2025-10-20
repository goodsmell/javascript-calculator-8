import { isEmpty, onlyDigitsAndDelims } from './validator.js';
import { parseCustomDelimiter, parseNumber } from './parser.js';
import { BASE_DELIMITERS } from './constants/delimiters.js';

export function add(number) {
  const sum = number.reduce((acc, cur) => acc + cur, 0);
  return sum;
}

export function result(input) {
  if (isEmpty(input)) return 0;

  const { customDelimiter, body } = parseCustomDelimiter(input);
  const delimiter = [...BASE_DELIMITERS, ...(customDelimiter ? [customDelimiter] : [])];

  onlyDigitsAndDelims(body, delimiter);

  const number = parseNumber(body, delimiter);

  return add(number);
}
