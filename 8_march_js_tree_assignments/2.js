
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isSubTree(tree1, tree2) {

    // if both are empty
    if (tree1 == null && tree2 == null) return true;

    // compare their subtrees
    else if (tree1 != null && tree2 != null){
        if (tree1.value == tree2.value) {

            // if root of subtree found then compare both trees till end
            return isSubTree(tree1.left, tree2.left) && isSubTree(tree1.right, tree2.right);
        
        }

        // check for subtree either in right part or left part of main tree
        else return isSubTree(tree1.left, tree2) || isSubTree(tree1.right, tree2);
    }

    else return false;
}

// main tree
var tree1 = new Node(4);
tree1.left = new Node(2);
tree1.right = new Node(123);
tree1.right.left = new Node(5);
tree1.right.right = new Node(23);

// sub tree
var tree2 = new Node(123);
tree2.left = new Node(5);
tree2.right = new Node(23);

console.log(`Tree 1: `, tree1);
console.log(`Tree 2: `, tree2);

console.log(`Is Tree 2 subtree of Tree 1? ${isSubTree(tree1, tree2)}`);