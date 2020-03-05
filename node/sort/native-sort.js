var numOfItems = process.argv[2];
var upperBound = Math.pow(2, 32);

var a = [];
for(var i  = 0; i < numOfItems; i++) {
    a.push(
        Math.floor(
            Math.random()*(upperBound + 1)
        )
    )
}

a.sort();