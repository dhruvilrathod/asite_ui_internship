var row = ''
for (var i = 0; i < 7; i++) {
    for (var j = 0; j < i; j++) {
        row += '#';
    }
    console.log(row);
    row = '';
}