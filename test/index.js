var generate = require('./../better-code/generateParenthesis');
var assert = require('assert');
const { performance } = require('perf_hooks');

var res = ['((()))', '(()())', '(())()', '()(())', '()()()'];
describe('3', function() {
  it('3', function() {
    var a = performance.now('a');
    assert.deepEqual(generate(3), res);
    var b = performance.now('a');
    console.log('time: ' + (b - a));
  });
});
