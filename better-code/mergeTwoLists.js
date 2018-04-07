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
var mergeTwoLists = function (l1, l2) {
  var dummyHead = new ListNode(0);
  var cur = dummyHead;
  while (l1 !== null || l2 !== null) {
    if (l1 === null || (l2 !== null && l1.val > l2.val)) {
      cur.next = l2;
      l2 = l2.next;
    } else {
      cur.next = l1;
      l1 = l1.next;
    }
    cur = cur.next;
  }
  return dummyHead.next;
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}

module.exports = mergeTwoLists;
