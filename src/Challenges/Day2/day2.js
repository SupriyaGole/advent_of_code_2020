export const countOfValidPasswords = (data) => {
  return data.filter((record) => {
    const [minRange, maxRange] = record.range.split("-");
    const numberOfOccurrences = countNumberOfOccurrences(record.password, record.letter);
    return numberOfOccurrences >= minRange && numberOfOccurrences <= maxRange;
  }).length;
};

export const countOfPasswordWherePositionIsRight = (data) => {
  return data.filter((record) => {
    const [minRange, maxRange] = record.range.split("-");
    let matchesAtMinRange = record.password.split("")[minRange-1] === record.letter;
    let matchesAtMaxRange = record.password.split("")[maxRange-1] === record.letter;
    if(matchesAtMinRange && matchesAtMaxRange) return false;
    return matchesAtMinRange || matchesAtMaxRange;
  }).length;
};

export const countNumberOfOccurrences = (word, letterToMatch) => {
  return word.split("").reduce((count, eachLetter) => {
    return eachLetter === letterToMatch ? count+1 : count;
  }, 0)
};
