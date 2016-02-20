'use strict';

function toCamelCase(str) {
  return str
    .replace(/\s(.)/g, (match) => match.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, (match) => match.toLowerCase());
}

module.exports = function parse(output) {
  const lines = output.split('\n');
  const parsed = {};

  lines.forEach((line) => {
    if (/:\s+/.test(line)) {
      const matches = line.trim().match(/^([A-z ]+):\s+([\d\.]+)/);
      const key = toCamelCase(matches[1]);
      const value = matches[2];

      parsed[key] = parseFloat(value);
    }
  });

  return parsed;
};
