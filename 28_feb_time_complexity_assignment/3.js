const list = `Dark chocolate
Baked tortilla chips
Salsa
Almonds or walnuts
abc
Whole-grain baked crackers
100-calorie snack packs
Graham crackers
High-fiber cereal bars
Reduced-fat microwaveable popcorn`

var wordCount = 0;
var whiteSpaceStart = false;

// shortest method
console.log('shortest method: ',list.split(/\s+/).length);

// this
for (var i in list) {
    if (list[i].match(/\s/)) {
        if (!whiteSpaceStart) {
            whiteSpaceStart = true;
            wordCount++;
        }
    }
    else whiteSpaceStart = false;
}

console.log(`Total words in the list: ${wordCount + 1}`);

// Time complexity = O(n) where n = total characters in the list's string