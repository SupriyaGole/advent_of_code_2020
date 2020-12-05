import {countOfValidPassports, validatePassports} from './day4';

describe('countOfValidPassports', () => {
  test('should return count of valid passwords for example data', () => {
    expect(countOfValidPassports("/example.txt")).toEqual(2);
  });

  test('should return count of valid passwords for sample data', () => {
    expect(countOfValidPassports("/input.txt")).toEqual(202);
  });
});

describe('validatePassports', () => {
  test('should return count of valid passports as per criteria for exmaple data', () => {
    expect(validatePassports("/second-example.txt")).toEqual(4);
  });

  test('should return count of valid passports as per criteria for sample data', () => {
    expect(validatePassports("/input.txt")).toEqual(137);
  });
});
