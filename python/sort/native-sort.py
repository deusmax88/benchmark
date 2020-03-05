import random
import sys
import math

numOfItems = int(sys.argv[1])
upperBound = math.pow(2, 32)

a = []
for i in range(0, numOfItems) :
    a.append(random.randint(0, upperBound))

a.sort()