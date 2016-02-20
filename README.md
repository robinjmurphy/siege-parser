# siege-parser

[![Build Status](https://travis-ci.org/robinjmurphy/siege-parser.svg)](https://travis-ci.org/robinjmurphy/siege-parser)

> Parses the output from the [Siege](https://github.com/joedog/siege) load testing tool

## Installation

```
npm i --global siege-parser
```

## Usage

### CLI

```bash
siege -t 5S https://www.example.com/ 2>&1 | siege-parser
# {
#   "transactions": 10,
#   "availability": 100.00,
#   "elapsedTime": 4.41,
#   "dataTransferred": 0.01,
#   "responseTime": 0.42,
#   "transactionRate": 2.27,
#   "throughput": 0.00,
#   "concurrency": 0.95,
#   "successfulTransactions": 10,
#   "failedTransactions": 0,
#   "longestTransaction": 0.50,
#   "shortestTransaction": 0.36
# }
```

The `2>&1` is necessary because Siege writes its output summary to `stderr`.

### Programmatic

```js
const parse = require('siege-parser');
const output = `
  Transactions:		          10 hits
  Availability:		      100.00 %
  Elapsed time:		        4.41 secs
  Data transferred:	        0.01 MB
  Response time:		        0.42 secs
  Transaction rate:	        2.27 trans/sec
  Throughput:		        0.00 MB/sec
  Concurrency:		        0.95
  Successful transactions:          10
  Failed transactions:	           0
  Longest transaction:	        0.50
  Shortest transaction:	        0.36
`;
const parsed = parse(output);
console.log(parsed);
// {
//   transactions: 10,
//   availability: 100.00,
//   elapsedTime: 4.41,
//   dataTransferred: 0.01,
//   responseTime: 0.42,
//   transactionRate: 2.27,
//   throughput: 0.00,
//   concurrency: 0.95,
//   successfulTransactions: 10,
//   failedTransactions: 0,
//   longestTransaction: 0.50,
//   shortestTransaction: 0.36
// }
```
