import { validate } from './validate';

describe('Validate', () => {
  it('should return true for an empty object', () => {
    const obj = {};
    const expectedResult = true;

    const result = validate.emptyObject(obj);

    expect(result).toEqual(expectedResult);
  });

  it('should return true for null', () => {
    const obj = null;
    const expectedResult = true;

    const result = validate.emptyObject(obj);

    expect(result).toEqual(expectedResult);
  });

  it('should return true for undefined', () => {
    const obj = undefined;
    const expectedResult = true;

    const result = validate.emptyObject(obj);

    expect(result).toEqual(expectedResult);
  });

  it('should return false for a non-empty object', () => {
    const obj = { name: 'John', age: 30 };
    const expectedResult = false;

    const result = validate.emptyObject(obj);

    expect(result).toEqual(expectedResult);
  });
});
