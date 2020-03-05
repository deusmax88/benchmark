# Comparing execution speed of sort algorithms by php, node and python
## Purpose
I wanted to compare execution speed of quick sort, merge sort and built-in
native sort of php, node and python as interpreted languages. 
Really interesting that instead of sorting algorithms 
theoretical time complexity of O(n*log(n)) results gathered
during real execution slightly differs.
## Directory Structure
To this moment useful folders are :
* `node/sort/`
* `php/sort/`
* `python/sort/`

They all contain written by me implementations of sort algorithms according to their filenames.
E.g. to measure execution time of quick sort algorithm by php - execute the following command.
(I assume are familiar with linux shell):

`time php php/sort/quick-sort.php 1000000`

All scripts accept integer argument - num of randomly generated
integer elements to be used as input for sorting algorithm.
 