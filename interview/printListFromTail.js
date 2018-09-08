// 剑指offer 面试题6 从尾到头打印链表

// 首先链表的每个节点的结构为
/*
function ListNode(x) {
    this.value = x
    this.next = null
}
*/
const printListFromTailToHead = (head) => {
    if(!head) return []
    let temp = []
    while(head.next != null ) {
        temp.unshift(head.value)
        head = head.next
    }
    temp.unshift(head.value)
    
    return temp
}

// 说实话，这个数据结构在js里面非常奇怪，链表和栈的概念在我们学习C/C++的时候常常被提及
// 而在js里面，感觉这些有点异类。我也几乎没有在js里用过这个数据结构，数组已经足够好用
