import { parseCustomDelimiter, parseNumber } from '../src/parser.js';

describe('parser - 커스텀 구분자 파싱', () => {
  test.each([
    ['//;\n1;2;3', ';', '1;2;3'],
    ['//***\n1***2***3', '***', '1***2***3'],
    ['//abc\n1abc2abc3', 'abc', '1abc2abc3'],
    ['//;\n', ';', ''],
    ['//;\n1;2', ';', '1;2'],
    ['//***\n1***2***3', '***', '1***2***3'],
    ['1,2:3', null, '1,2:3'],
    ['//;1;2;3', null, '//;1;2;3'],
    ['//.*+\n1.*+2.*+3', '.*+', '1.*+2.*+3'],
  ])('"%s" → customDelimiter:%j, body:%j', (input, expectedDelim, expectedBody) => {
    const { customDelimiter, body } = parseCustomDelimiter(input);
    expect(customDelimiter).toBe(expectedDelim);
    expect(body).toBe(expectedBody);
  });
});

describe('parser - 숫자 파싱', () => {
  test.each([
    ['1;2;3', [',', ':', ';'], [1, 2, 3]],
    ['1,2:3', [',', ':'], [1, 2, 3]],
    ['3', [',', ':'], [3]],
    ['', [',', ':'], [0]],
  ])('"%s"를 구분자 %j로 파싱하면 %j가 된다', (body, delims, expected) => {
    const numbers = parseNumber(body, delims);
    expect(numbers).toEqual(expected);
  });
});
