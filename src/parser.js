import { makeDelimiterRegex } from './utils/regex.js';
import { REGEX } from './constants/patterns.js';

export function parseCustomDelimiter(input) {
  const match = input.match(REGEX.CUSTOM_DELIMITER);

  if (!match) return { customDelimiter: null, body: input };

  const customDelimiter = match[1];
  const body = input.slice(match[0].length);

  return { customDelimiter, body };
}

export function parseNumber(body, delims) {
  const reg = makeDelimiterRegex(delims);
  const tokens = body.split(reg);

  return tokens.map((t) => Number(t));
}
