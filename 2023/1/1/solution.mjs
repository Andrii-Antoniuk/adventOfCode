import { readFileSync } from 'fs';

const input = readFileSync('./input.txt', 'UTF-8').split('\n');

/**
 *
 * @param {string} string
 */
function trawerseString(string) {
  const characters = string.split('');

  let first = null;
  let last = null;

  for (let char of characters) {
    if (!Number.isInteger(+char)) {
      continue;
    }

    if (!first) {
      first = char;
    } else {
      last = char;
    }
  }

  return +[first, last ?? first].join('');
}

const result = input.reduce((sum, currValue) => sum + trawerseString(currValue), 0);

console.log(result);