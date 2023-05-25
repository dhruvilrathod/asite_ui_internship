// find all elements at k distance from root

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

var tree1 = new Node(4);
tree1.left = new Node(2);
tree1.left.right = new Node(3);
tree1.left.left = new Node(20);
tree1.left.right.left = new Node(25);
tree1.left.right.right = new Node(30);
tree1.right = new Node(123);
tree1.right.left = new Node(5);
tree1.right.right = new Node(80);

/*

            4
        /        \ 
        2           123
      /   \         /   \
    20      3       5   80
            /\
          25  30
*/

var data = [];

function findAllElementsAtLevel(tree, distance) {
    if (distance == 0) return data.push(tree.value);
    else {
        distance--;
        if (tree.left !== null) {
            findAllElementsAtLevel(tree.left, distance);
        }
        if (tree.right !== null) {
            findAllElementsAtLevel(tree.right, distance);
        }
    }
    return;
}

findAllElementsAtLevel(tree1, 3);
console.log(data);