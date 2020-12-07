import {findMissingSeatId, findSeatId} from './day5';

describe('findSeatId', () => {
  test('should return highest seat id for example data', () => {
    expect(findSeatId("/example.txt")).toEqual(820);
  });

  test('should return seat id for example data for sample data', () => {
    expect(findSeatId("/input.txt")).toEqual(991);
  });

  test('should return missing seat id', () => {
    expect(findMissingSeatId("/input.txt")).toEqual(534);
  });
});
