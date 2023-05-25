/* 
Definition of sortable stack:
A[] is said to be sortable if
for all elements in A, push(B,pop(A)) 
and B[] is generated as sorted list, then A[] is said to be sortable stack

1 2 4 5 6 3
1 2 4 5 3 6
1 2 4 3 5 6
1 2 3 4 5 6


*/


// sort at the time of insertion

class SortableStack {
    constructor() {
        this.sortableStack = [];
    }

    push(value) {
        var temp = [];
        console.log('Element: ', value);
        if (this.sortableStack.length == 0) this.sortableStack.push(value);
        else if (this.sortableStack[this.sortableStack.length - 1] <= value) this.sortableStack.push(value);
        else {
            for (var i = this.sortableStack.length - 1; i >=0 ; i--) {
                if (this.sortableStack[i] > value) {
                    temp.push(this.sortableStack.pop());
                }
                else break;
            }
            this.sortableStack.push(value);
            while(temp[0]) {
                this.sortableStack.push(temp.pop());
            }
            console.log('Sortable stack', this.sortableStack);
        }
        return this.sortableStack;
    }

    pop() {
        return this.sortableStack.pop();
    }
}

let elements = new SortableStack();
for (var i = 0; i < 10; i++) {
    elements.push(Math.floor(Math.random() * 100));
}