/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var aPointer = head;
  var bPointer = head;
  while (aPointer !== null) {
    if (n-- < 0) {
      bPointer = bPointer.next;
    }
    aPointer = aPointer.next;
  }
  if (n > 0) {
    return head;
  }
  if (n === 0) {
    return head.next;
  }
  bPointer.next = bPointer.next ? bPointer.next.next : null;
  return head;
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}
module.exports = removeNthFromEnd;
