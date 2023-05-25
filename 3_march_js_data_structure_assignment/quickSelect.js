// Quick select: find kth smallest element from list

var arr = [];
for(var i = 0; i < 20; i++) {
    arr.push(Math.floor(Math.random() * 50));
}

function quickSelect(arr, k) {
    if (k > arr.length) return 'Invalid Input'
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (temp.length == 0) temp.push(arr[i]);
        else if(temp.length < k && !temp.includes(arr[i])) temp.push(arr[i]);
        else {
            var maxIndex = 0;
            for (var j = 0; j < temp.length; j++) {
                if(temp[j] == arr[i]) break;
                if(temp[j] > temp[maxIndex]) maxIndex = j;
            }
            if(temp[maxIndex] > arr[i]) temp[maxIndex] = arr[i];
        }
    }
    var maxVal = temp[0];
    for(var x = 1; x <temp.length; x++) {
        if(temp[x] > maxVal) maxVal = temp[x];
    }
    return maxVal;
}
console.log('Original array: ');
console.log(arr);
console.log('3rd smallest element:');
console.log(quickSelect(arr, 3));
