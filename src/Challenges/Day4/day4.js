import {isEqual} from 'lodash';

const fs = require('fs');
const path = require('path');

const parseFile = (filename) => {
  const text = fs.readFileSync(path.join(__dirname) + filename, 'utf8');
  const split = text
    .split(/\n\s*\n/);

  return split.map((item) => {
    let message = JSON.stringify(item);
    const a = message.split('\\n').join();
    const eachPassport = a.split(/[\s,]/);
    const detail = {};
    eachPassport.forEach((item) => {
      if(item.length > 1){
        const replaced = item.replace('"', '');
        const keyValue = replaced.split(':');
        detail[keyValue[0]] = keyValue[1];
      }
    });
    return detail;
  });
};

const validPassports = filename => {
  const mandatoryFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].sort();
  const data = parseFile(filename);

  return data.filter((item) => {
    const keysWithoutCid = Object.keys(item).filter((value) => value !== 'cid').sort();
    return isEqual(keysWithoutCid, mandatoryFields);
  });
};

export const countOfValidPassports = (filename) => validPassports(filename).length;

export const validatePassports = (filename) => {
  const allValidPassports = validPassports(filename);

  const passports = allValidPassports.filter(passport =>
    validateYear(passport.byr, 1920, 2002) &&
    validateYear(passport.iyr, 2010, 2020) &&
    validateYear(passport.eyr, 2020, 2030) &&
    validateHeight(passport.hgt) &&
    validateHairColor(passport.hcl) &&
    validateEyeColor(passport.ecl) &&
    validatePassportId(passport.pid)
  );
  return passports.length;
};

const validateYear = (year, minYear, maxYear) => year.toString().length === 4 && year >= minYear && year <= maxYear;

const validateHeight = (height) => {
  const heightWithCm = height.includes('cm');
  const heightWithIn = height.includes('in');
  if (!heightWithCm && !heightWithIn) {
    return false;
  }
  const minHeight = heightWithCm ? 150 : 59;
  const maxHeight = heightWithCm ? 193 : 76;
  const parsedHeight = height.split(/[cmin]/)[0];
  return parsedHeight >= minHeight && parsedHeight <= maxHeight;
};

const validateHairColor = (hairColour) => /^#([a-f|0-9]{6})$/.test(hairColour);

const validateEyeColor = (eyeColour) => /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(eyeColour);

const validatePassportId = (passportId) => /^([0-9]{9})$/.test(passportId);
