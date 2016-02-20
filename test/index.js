'use strict';

const parse = require('..');
const assert = require('assert');

describe('siege-parser', () => {
  it('parses the output from the siege command', () => {
    const output = `
      ** SIEGE 3.1.0
      ** Preparing 1 concurrent users for battle.
      The server is now under siege...
      Lifting the server siege..      done.
      
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
    assert.deepEqual(parsed, {
      transactions: 10,
      availability: 100.00,
      elapsedTime: 4.41,
      dataTransferred: 0.01,
      responseTime: 0.42,
      transactionRate: 2.27,
      throughput: 0.00,
      concurrency: 0.95,
      successfulTransactions: 10,
      failedTransactions: 0,
      longestTransaction: 0.50,
      shortestTransaction: 0.36
    });
  });
});
