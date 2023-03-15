// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let map = [];

    while(head) {
        if (map.find(item => item === head.next)) {
            return true;
        }
        map.push(head);
        head = head.next;
    }
    return false;

};

/*
[3,2,0,-4]
1
[1,2]
0
[1]
-1
 */