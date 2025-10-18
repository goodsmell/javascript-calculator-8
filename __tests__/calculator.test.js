import { result } from '../src/calculator.js';

describe('result - 기본', () => {
  test('빈 문자열이면 0을 반환한다', () => {
    expect(result('')).toBe(0);
  });
});
