<?php
$numOfItems = $argv[1];
$upperBound = pow(2, 32);

$a = [];
for($i = 0; $i < $numOfItems; $i++) {
    $a[] = mt_rand(0, $upperBound);
}

mergeSort($a);

function mergeSort($a) {
    if (count($a) == 1) {
        return $a;
    }

    $left = [];
    $right = [];

    for($i = 0; $i < count($a); $i++) {
        if ($i < count($a) / 2) {
            $left[] = $a[$i];
        }
        else {
            $right[] = $a[$i];
        }
    }

    $left = mergeSort($left);
    $right = mergeSort($right);

    return merge($left, $right);
}

function merge($left, $right) {
    $result = [];
    $numOfIterations = count($left) + count($right);
    $lastLeft = array_shift($left);
    $lastRight = array_shift($right);

    for ($i = 0; $i < $numOfIterations; $i++) {
        if ($lastLeft && $lastRight) {
            if ($lastLeft >= $lastRight) {
                $result[] = $lastRight;
                $lastRight = array_shift($right);
                continue;
            }
            else {
                $result[] = $lastLeft;
                $lastLeft = array_shift($left);
                continue;
            }
        }

        if (!$lastLeft) {
            $result[] = $lastRight;
            $lastRight = array_shift($right);
            continue;
        }

        if (!$lastRight) {
            $result[] = $lastLeft;
            $lastLeft = array_shift($left);
        }
    }

    return $result;
}
