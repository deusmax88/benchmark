import random
import sys
import math
from collections import deque

numOfItems = int(sys.argv[1])
upperBound = math.pow(2, 32)

a = []
for i in range(0, numOfItems) :
    a.append(random.randint(0, upperBound))

def mergeSort(a) :
    if (len(a) == 1):
        return a

    left = []
    right = []
    for i in range(0, len(a)) :
        if i < len(a) / 2 :
            left.append(a[i])
        else :
            right.append(a[i])

    left = mergeSort(left)
    right = mergeSort(right)

    return merge(left, right)

def merge(left, right) :
    result = []
    numOfIterations = len(left) + len(right)
    left = deque(left)
    right = deque(right)
    lastLeft = left.popleft()
    lastRight = right.popleft()
    for i in range(0, numOfIterations) :
        if lastLeft and lastRight:
            if lastLeft >= lastRight:
                result.append(lastRight)
                lastRight = right.popleft() if len(right) > 0  else None
                continue
            else :
                result.append(lastLeft)
                lastLeft = left.popleft() if len(left) > 0 else None
                continue

        if not lastLeft :
            result.append(lastRight)
            lastRight = right.popleft() if len(right) > 0 else None
            continue

        if not lastRight :
            result.append(lastLeft)
            lastLeft = left.popleft() if len(left) > 0 else None

    return result

mergeSort(a)
