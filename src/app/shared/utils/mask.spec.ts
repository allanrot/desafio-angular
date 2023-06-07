import { mask } from './mask';

describe('Mask', () => {
  it('should mask CPF correctly', () => {
    const input = '12345678900';
    const expectedOutput = '123.456.789-00';

    const result = mask.cpf(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle empty input', () => {
    const input = '';
    const expectedOutput = '';

    const result = mask.cpf(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle non-numeric characters in input', () => {
    const input = 'a12b34c56789d00';
    const expectedOutput = '123.456.789-00';

    const result = mask.cpf(input);

    expect(result).toEqual(expectedOutput);
  });

  it('should handle input with existing formatting', () => {
    const input = '123.456.789-00';
    const expectedOutput = '123.456.789-00';

    const result = mask.cpf(input);

    expect(result).toEqual(expectedOutput);
  });
});
