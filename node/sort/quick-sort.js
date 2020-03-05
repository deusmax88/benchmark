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

function quickSort(a, start, end)
{
    if (start < end) {
        var q = partition(a, start, end);
        quickSort(a, start, q - 1);
        quickSort(a, q + 1, end);
    }
}

function partition(a, low, high)
{
    var pivot = a[high];
    var i = low - 1;

    for (var j = low; j <= high - 1; j++) {
        if (a[j] < pivot) {
            i++;
            swap(a, i, j);
        }
    }
    swap(a, i + 1, high);
    return i + 1;
}

function swap(a, i, j)
{
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}

