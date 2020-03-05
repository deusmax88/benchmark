<?php
$numOfItems = $argv[1];
$upperBound = pow(2, 32);

$a = [];
for($i = 0; $i < $numOfItems; $i++) {
    $a[] = mt_rand(0, $upperBound);
}

function quickSort(&$a, $start, $end) {
    if ($start < $end) {
        $q = partition($a, $start, $end);
        quickSort($a, $start, $q - 1);
        quickSort($a, $q + 1, $end);
    }
}

function partition(&$a, $low, $high)
{
    $pivot = $a[$high];
    $i = $low - 1;
    for ($j = $low; $j <= $high - 1; $j++) {
        if ($a[$j] < $pivot) {
            $i++;
            swap($a, $i, $j);
        }
    }
    swap($a, $i + 1, $high);
    return $i + 1;
}


function swap(&$a, $i, $j)
{
    $tmp = $a[$i];
    $a[$i] = $a[$j];
    $a[$j] = $tmp;
}

quickSort($a, 0, count($a) - 1);