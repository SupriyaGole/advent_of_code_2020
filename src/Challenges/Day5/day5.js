const fs = require("fs");
const path = require("path");

function allSeatNumbers(filename) {
  const text = fs.readFileSync(path.join(__dirname) + filename, 'utf8');
  const split = text.split(/\n/).filter(item => item !== '');
  const initialRange = [0, 127];
  const initialPositionRange = [0, 7];
  const allSeatNumbers = split.map((item) => {
    let rangeToConsider = initialRange;
    let rangeForPosition = initialPositionRange;
    const firstHalf = item.slice(0, item.length - 3);
    const secondHalf = item.slice(item.length - 3);
    firstHalf.split('').forEach((letter) => {
      if (letter === 'F') {
        rangeToConsider = lowerHalf(rangeToConsider);
      }
      if (letter === 'B') {
        rangeToConsider = upperHalf(rangeToConsider);
      }
    });
    secondHalf.split('').forEach((letter) => {
      if (letter === 'R') {
        rangeForPosition = upperHalf(rangeForPosition);
      }
      if (letter === 'L') {
        rangeForPosition = lowerHalf(rangeForPosition);
      }
    });
    return rangeToConsider[0] * 8 + rangeForPosition[0];
  });
  return allSeatNumbers;
}

export const findSeatId = (filename) => {
  return Math.max(...allSeatNumbers(filename));
};

export const findMissingSeatId = (filename) => {
  const seatNumbers = allSeatNumbers(filename).sort(function(a, b){return a-b});

  let missingSeatId = null;
  seatNumbers.some((seatId, index) => {
    if(seatId + 1 !== seatNumbers[index+1]){
      missingSeatId = seatId + 1;
      return true;
    }
  });
  return missingSeatId;
};

const lowerHalf = (range) => {
  const minRange = range[0];
  const maxRange = range[1];
  const diff = Math.floor((maxRange - minRange)/2);
  const nextMaxRange = minRange + diff;
  return [minRange, nextMaxRange];
};

const upperHalf = (range) => {
  const minRange = range[0];
  const maxRange = range[1];
  const diff = Math.floor((maxRange - minRange)/2);
  const nextMinRange = maxRange - diff;
  return [nextMinRange, maxRange];
};
