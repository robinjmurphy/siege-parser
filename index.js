'use strict';

const summaryLinePattern = /^([A-z ]+):\s+([\d\.]+)/;

function toCamelCase(str) {
  return str
    .replace(/\s(.)/g, (match) => match.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, (match) => match.toLowerCase());
}

module.exports = function parse(output) {
  const lines = output.split('\n');

  return lines.reduce((parsed, line) => {
    if (summaryLinePattern.test(line)) {
      const matches = line.trim().match(summaryLinePattern);
      const key = toCamelCase(matches[1]);
      const value = matches[2];

      parsed[key] = parseFloat(value);
    }

    return parsed;
  }, {});
};
