import { isEmpty } from '../src/validator.js';

describe('validator - 입력값 처리', () => {
  test('빈 문자열이면 0을 반환한다', () => {
    expect(isEmpty('')).toBe(true);
  });
});
