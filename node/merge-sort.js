function mergeSort(a) {
    if (a.length == 1) {
        return a;
    }

    var left = a.slice(0, parseInt(a.length / 2));
    var right = a.slice(parseInt(a.length / 2));

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right)
}

function merge(left, right) {
    var b = [];
    var numOfIterations = left.length + right.length;
    var lastLeft = left.shift();
    var lastRight = right.shift();
    for(i = 0; i < numOfIterations; i++) {
        if (!!lastLeft && !!lastRight) {
            if (lastLeft >= lastRight) {
                b.push(lastRight);
                lastRight = right.shift();
                continue;
            }
            else {
                b.push(lastLeft);
                lastLeft = left.shift();
                continue;
            }
        }

        if (!!!lastLeft) {
            b.push(lastRight);
            lastRight = right.shift();
            continue;
        }

        if (!!!lastRight) {
            b.push(lastLeft);
            lastLeft = left.shift();
        }
    }

    return b;
}

function merge2(left, right)
{
    var b = [];
    var i = 0, j = 0;
    while(true) {
        if (i < left.length && j < right.length) {
            if(left[i] >= right[j]) {
                b.push(right[j]);
                j++;
                continue;
            }
            else {
                b.push(left[i]);
                i++;
                continue;
            }
        }

        if (i == left.length) {
            while (j < right.length) {
                b.push(right[j]);
                j++;
            }

            break;
        }

        if (j == right.length) {
            while(i < left.length) {
                b.push(left[i]);
                i++;
            }

            break;
        }
    }

    return b;
}