<?php
$numOfItems = $argv[1];
$upperBound = pow(2, 32);

$a = [];
for($i = 0; $i < $numOfItems; $i++) {
    $a[] = mt_rand(0, $upperBound);
}

sort($a);