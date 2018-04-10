var removeNthFromEnd = require('./../better-code/removeNthFromEnd');
var assert = require('assert');

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createList(arr) {
  var dummyHead = new ListNode(0);
  var cur = dummyHead;
  for (var i = 0; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return dummyHead.next;
}
var list = createList([1,2]);

removeNthFromEnd(list, 1);
