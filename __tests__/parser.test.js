import { parseCustomDelimiter } from '../src/parser.js';

describe('parser', () => {
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
