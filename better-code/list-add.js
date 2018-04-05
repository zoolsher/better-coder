/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var dummyHead = new ListNode(0);
  var cur = dummyHead;
  var carry = 0;
  while (l1 !== null || l2 !== null) {
    var x = l1 ? l1.val : 0;
    var y = l2 ? l2.val : 0;
    var val = x + y + carry;
    cur.next = new ListNode(val % 10);
    cur = cur.next;
    carry = ~~(val / 10);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (carry) {
    cur.next = new ListNode(1);
  }
  return dummyHead.next;
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}
module.exports = addTwoNumbers;
