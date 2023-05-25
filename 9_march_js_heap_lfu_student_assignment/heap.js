class MinHeap {
    heap = [];

    // this will take two parameters: array and start count
    heapify(arr, startCount, n) {
        if(!n) n = arr.length;
        var left = (startCount * 2) + 1;
        var right = (startCount * 2) + 2;
        var minIndex = startCount;
        if (left < n && arr[left] < arr[minIndex]) minIndex = left;
        if (right < n && arr[right] < arr[minIndex]) minIndex = right;
        if (minIndex !== startCount) {
            [arr[startCount], arr[minIndex]] = [arr[minIndex], arr[startCount]];
            this.heapify(arr, minIndex, n);
        }
        return arr;
    }

    // build heap from all non-leaf nodes
    buildHeap(arr) {
        var heap;
        for (var i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            heap = this.heapify(arr, i);
        }
        return heap;
    }

    heapSort(arr) {
        var sorted;
        // this will sort heap in reverse order
        for (var i = arr.length - 1; i > 0; i--) {
            var temp = arr[i];
            arr[i] = arr[0];
            arr[0] = temp;
            sorted = this.heapify(arr, 0, i);
        }

        // this will give the ascending order
        for(var i=0; i < sorted.length/2 - 1; i++) {
            [sorted[i], sorted[(sorted.length-1) - i]] = [sorted[(sorted.length-1) - i], sorted[i]]
        }
        return sorted;
    }

    insertData(data) {
        this.heap.push(data);
    }

    get getHeap() {
        return this.heap;
    }
}

// considering this array as a complete binary tree
const arr = [10, 13, 12, 5, 7, 21, 40, 12, 33];
console.log('Data: ');
console.log(arr);

let h1 = new MinHeap();

console.log('Heapified Data:');
var heap = h1.buildHeap(arr);
console.log(heap);

console.log('Performing Heap Sort:');
var sorted = h1.heapSort(heap);
console.log(sorted);

