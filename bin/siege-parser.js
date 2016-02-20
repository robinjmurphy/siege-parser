#! /usr/bin/env node

/* eslint-disable no-console */

'use strict';

const parse = require('..');
const stdin = process.stdin;

let output = '';

stdin.on('data', (data) => {
  output = output += data.toString();
});

stdin.on('end', () => {
  const parsed = parse(output);

  console.log(JSON.stringify(parsed, null, 2));
});
