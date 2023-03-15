// https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const sum = getNumFromList(l1) + getNumFromList(l2);
    return createNodeList(sum);
};

function createNodeList(nums) {
    const arr = nums.toString().split('').reverse();
    let res = {};
    let nextNode = null;
    for (let i = 0; i < arr.length; i++) {
        const newNode = {
            val: arr[i],
            next: null,
        };

        if (res.next === undefined) {
            res = newNode;
            continue;
        }
        if (nextNode === null) {
            res.next = newNode;
            nextNode = res.next;
            continue;
        }

        nextNode.next = newNode
        nextNode = newNode;
    }
    return res;
}

function getNumFromList(head) {
    let nums = '';

    while(head) {
        nums = head.val + nums;
        head = head.next;
    }

    return +nums;
}

/*
[2,4,3]
[5,6,4]
[0]
[0]
[9,9,9,9,9,9,9]
[9,9,9,9]
 */
