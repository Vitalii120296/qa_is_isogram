'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should be right result for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should be right result for different situation', () => {
    expect(isIsogram('playgrounds')).toBe(true);
    expect(isIsogram('look')).toBe(false);
    expect(isIsogram('Oops')).toBe(false);
  });
});
