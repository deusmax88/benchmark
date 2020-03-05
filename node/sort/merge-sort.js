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

mergeSort(a);

function mergeSort(a) {
    if (a.length === 1) {
        return a;
    }

    var left = [];
    var right = [];
    for(var i = 0; i < a.length; i++) {
        if (i < parseInt(a.length / 2)) {
            left.push(a[i]);
        }
        else {
            right.push(a[i]);
        }
    }

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right)
}

function merge(left, right) {
    var result = [];
    var numOfIterations = left.length + right.length;
    var lastLeft = left.shift();
    var lastRight = right.shift();
    for(i = 0; i < numOfIterations; i++) {
        if (!!lastLeft && !!lastRight) {
            if (lastLeft >= lastRight) {
                result.push(lastRight);
                lastRight = right.shift();
                continue;
            }
            else {
                result.push(lastLeft);
                lastLeft = left.shift();
                continue;
            }
        }

        if (!!!lastLeft) {
            result.push(lastRight);
            lastRight = right.shift();
            continue;
        }

        if (!!!lastRight) {
            result.push(lastLeft);
            lastLeft = left.shift();
        }
    }

    return result;
}
