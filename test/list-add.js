var assert = require('assert');
var addTwoNumbers = require('./../better-code/list-add');

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function makeList(num) {
  var start = new ListNode(0);
  var cur = start;
  do {
    cur.next = new ListNode(num % 10);
    cur = cur.next;
    num = Math.floor(num / 10);
  } while (num > 0);
  return start.next;
}

describe('addTwoNumbers', function () {
  it('add as 666', function () {
    var l = makeList(333)
    var r = makeList(333);
    assert.deepEqual(makeList(666), addTwoNumbers(l, r));
  });
  it('add as 1221', function () {
    var l = makeList(888)
    var r = makeList(333);
    assert.deepEqual(makeList(1221), addTwoNumbers(l, r));
  });
  it('add as 200000', function () {
    var l = makeList(1);
    var r = makeList(199999);
    assert.deepEqual(makeList(200000), addTwoNumbers(l, r));
  });
  it('add as 18 with zero', function () {
    var l = makeList(0);
    var r = makeList(18);
    assert.deepEqual(makeList(18), addTwoNumbers(l, r));
  });
});
