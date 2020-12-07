import {inputData} from "./inputData";
import {cloneDeep} from "lodash";

export const multiplyNumbersWhichAddUpTo2000 = (numberToMatch) => {
  const numbersWhichAddsToSum = [];
  inputData.every((number, index) => {
    const sum = number;
    const cloned = cloneDeep(inputData);
    cloned.splice(0,index+1);

    // eslint-disable-next-line array-callback-return
    const found = cloned.some ((nextNumber) => {
      if(sum + nextNumber === numberToMatch) {
        numbersWhichAddsToSum.push(number, nextNumber);
        return true;
      }
    });
    return !found;
  });
  return numbersWhichAddsToSum[0] * numbersWhichAddsToSum[1];
};

export const multiplyNumbers = (numberToMatch) => {
  const numbersWhichAddsToSum = [];
  inputData.every((number, index) => {
    const sum = number;
    const cloned1 = cloneDeep(inputData);
    cloned1.splice(0,index+1);
    const cloned2 = cloneDeep(inputData);
    cloned2.splice(0,index+2);

    // eslint-disable-next-line array-callback-return
    const found = cloned1.some ((nextNumber) => {
      return cloned2.some ((newNumber) => {
        if(sum + nextNumber + newNumber === numberToMatch) {
          numbersWhichAddsToSum.push(number, nextNumber, newNumber);
          return true;
        }
      });
    });
    return !found;
  });
  return numbersWhichAddsToSum[0] * numbersWhichAddsToSum[1] * numbersWhichAddsToSum[2];
};
