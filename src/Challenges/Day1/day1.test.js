import {multiplyNumbersWhichAddUpTo2000} from './day1';

describe('multiplyNumbersWhichAddUpTo2000', () => {
  test('should return multiplication of two number, which adds upto 2000', () => {
    expect(multiplyNumbersWhichAddUpTo2000(2020)).toEqual(691771);
  });
});
