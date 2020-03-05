import json
import sys

input = sys.stdin.read()
input = input.rstrip('\n')
a = json.loads(input)

def quickSort(a, start, end) :
    if start < end :
        q = partition(a, start, end)
        quickSort(a, start, q - 1)
        quickSort(a, q + 1, end)

def partition(a, low, high) :
    pivot = a[high]
    i = low - 1
    for j in range(low, high) :
        if (a[j] < pivot) :
            i += 1
            swap(a, i, j)
    swap(a, i + 1, high)
    return i + 1

def swap(a, i, j) :
    tmp = a[i]
    a[i] = a[j]
    a[j] = tmp

quickSort(a, 0 , len(a) - 1)

#print(json.dumps(a))