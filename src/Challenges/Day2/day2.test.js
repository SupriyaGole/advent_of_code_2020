import {inputData} from "./inputData";
import {countNumberOfOccurrences, countOfPasswordWherePositionIsRight, countOfValidPasswords} from './day2';

describe('Password Validation', () => {
  describe('countOfValidPasswords', () => {
    test('should return count of valid passwords', () => {
      const data = [{range: '2-8', letter: 'd', password: 'pddzddkdvqgxndd'},
        {range: '4-14', letter: 'r', password: 'rrrjrrrrrrbrrccrr'},
        {range: '2-7', letter: 'r', password: 'zrgsnrr'},
        {range: '9-10', letter: 'z', password: 'zzzxwzznpd'},
        {range: '8-13', letter: 'g', password: 'gggggggxgggghggg'},
        {range: '1-6', letter: 'c', password: 'xcccxcccccz'},
        {range: '3-4', letter: 'b', password: 'bxbt'},
        {range: '8-11', letter: 'd', password: 'dddddddzddv'},
        {range: '4-14', letter: 'm', password: 'kxdmmmdmfwmmmdfr'}];

      expect(countOfValidPasswords(data)).toEqual(5);
    });

    test('should return count of valid passwords for huge data', () => {
      expect(countOfValidPasswords(inputData)).toEqual(460);
    });
  });

  describe('countOfPasswordWherePositionIsRight', () => {
    test('should return count of password where one position of given letter should be right', () => {
      const data = [{range: '2-8', letter: 'd', password: 'adhubjsn'},
        {range: '4-8', letter: 'r', password: 'rrrjrjir'},
        {range: '2-7', letter: 'r', password: 'zrgsnrr'}];

      expect(countOfPasswordWherePositionIsRight(data)).toEqual(2);
    });

    test('should return count of password where one position of given letter should be right for huge data', () => {
      expect(countOfPasswordWherePositionIsRight(inputData)).toEqual(251);
    });
  });

  describe('checkNumberOfOccurrences', () => {
    test('should return count of occurrences', () => {
      expect(countNumberOfOccurrences("pddzddkdvqgxndd", "d")).toEqual(7);
    });
  });
});
