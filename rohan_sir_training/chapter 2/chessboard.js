var cell = '';
for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        if (i % 2 == 1)
            if (j % 2 == 0)
                cell += '# ';
            else cell += '  ';
        else if (i % 2 == 0)
            if (j % 2 == 1)
                cell += '# ';
            else cell += '  ';
    }
    console.log(cell);
    cell = '';
}