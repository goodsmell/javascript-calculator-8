import { makeDelimiterRegex } from './utils/regex.js';

export function parseCustomDelimiter(input) {
  const regexp = /^\/\/(.+)(?:\n|\\n)/;
  const match = input.match(regexp);

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
