<?php
$input = stream_get_contents(STDIN);
$a = json_decode($input);

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

//echo json_encode($a);
?>