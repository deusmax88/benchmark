import random
import sys
import json
import math

numOfItems = int(sys.argv[1])
upperBound = math.pow(2, 3)

a = []
for i in range(0, numOfItems) :
    a.append(random.randint(0, upperBound))

print(json.dumps(a))