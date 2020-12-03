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
  console.log("numbersWhichAddsToSum", numbersWhichAddsToSum);
  return numbersWhichAddsToSum[0] * numbersWhichAddsToSum[1];
};
