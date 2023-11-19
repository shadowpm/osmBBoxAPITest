import '@testing-library/jest-dom/extend-expect';
import { isValidLatitude, isValidLongitude} from './validations';

describe('isValidLatitude tests', () => {
  it('check if parameter is within the range', () => {
    const result = isValidLatitude('80');
    expect(result).toBe(true);
  });

  it('check if parameter is not within the range', () => {
    const result = isValidLatitude('96');
    expect(result).toBe(false);
  });

  it('check if parameter is not a number', () => {
    const result = isValidLatitude('abc');
    expect(result).toBe(false);
  });

  it('check when the parameter is empty', () => {
    const result = isValidLatitude('');
    expect(result).toBe(false);
  });
});

describe('isValidLongitude tests', () => {
    it('check if parameter is within the range', () => {
      const result = isValidLongitude('-10');
      expect(result).toBe(true);
    });
  
    it('check if parameter is not within the range', () => {
      const result = isValidLongitude('200');
      expect(result).toBe(false);
    });
  
    it('check if parameter is not a number', () => {
      const result = isValidLongitude('abc');
      expect(result).toBe(false);
    });
  
    it('check when the parameter is empty', () => {
      const result = isValidLongitude('');
      expect(result).toBe(false);
    });
  });