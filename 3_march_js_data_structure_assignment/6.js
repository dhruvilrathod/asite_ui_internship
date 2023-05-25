class Node {
    constructor(val) {
        this.data = val;
        this.prev = null;
        this.next = null;
    }
}

function deleteNode(deletionNode) {

    if (deletionNode.next)
        deletionNode.next.prev = deletionNode.prev;

    if (deletionNode.prev)
        deletionNode.prev.next = deletionNode.next;
}

function removeDuplicates(headNode, targetData) {
    let curNode = headNode;

    while (curNode.data != targetData) {
        curNode = curNode.next;
    }

    deleteNode(curNode);

    return headNode;
}

function push(head, new_data, countObj) {
    console.log(`Pushing element ${new_data} in the Linked List...`);
    if (countObj[new_data]) {
        console.log(`${new_data} already exists`);
        console.log(`Removing existing ${new_data}...`);
        removeDuplicates(head, new_data);
    } else {
        countObj[new_data] = 1;
    }
    var new_node = new Node();
    new_node.data = new_data;

    console.log(`New ${new_data} is added to the Linked List`);

    if (head === null) {
        return new_node;
    } else {
        let tempHead = head;
        while (head.next) {
            head = head.next;
        }

        new_node.prev = head;
        new_node.next = null;
        head.next = new_node;

        return tempHead;
    }
}

function printList(head) {
    let listString = "";
    if (head === null)
        console.log("Doubly Linked-ist is empty");

    while (head != null) {
        listString = listString + head.data + ", ";
        head = head.next;
    }
    console.log(listString)
}

var head = null;
let countObj = {};

for (var i = 0; i < 10; i++) {
    head = push(head, Math.floor(Math.random() * 25), countObj);
}

console.log("Linked list :");
printList(head);