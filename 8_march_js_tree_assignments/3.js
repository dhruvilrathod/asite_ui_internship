/* 
Logic to check mirror:

1. check root nodes are same
2. check left subtree of node n in a tree1 == right subtree of node n in tree2
3. check right subtree of node n in a tree1 == left subtree of node n in tree2

*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// make tree1
var tree1 = new Node(4);
tree1.left = new Node(2);
tree1.right = new Node(123);
tree1.right.left = new Node(5);
tree1.right.right = new Node(203);

// make tree 2
var tree2 = new Node(4);
tree2.left = new Node(123);
tree2.left.left = new Node(203);
tree2.left.right = new Node(5);
tree2.right = new Node(2);

// time complexity: o(n) as all the n nodes in both the trees are visited at the same time recursively.
// there is not divide and conqure hence no log n.
function isMirror(tree1, tree2) {
    // if both are empty
    if (tree1 == null && tree2 == null) return true;

    // compare their subtrees
    else {
        if (tree1.value == tree2.value) {
            return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left);
        }
        else return false;
    }
}

console.log(`Are both trees mirror? ${isMirror(tree1, tree2)}`);