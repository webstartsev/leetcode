// https://leetcode.com/problems/reverse-linked-list/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;

  while (head) {
    const temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }

  return prev;
};

console.log(reverseList([1, 2, 3, 4, 5]));
console.log(reverseList([1, 2]));
console.log(reverseList([]));
