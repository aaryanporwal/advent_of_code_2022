"""
    Part 2, No sorting
    Time Complexity: O(N)
"""

file = open("input.txt", "r")

max1 = 0
max2 = 0
max3 = 0

temp_sum = 0


def calcMax(max1, max2, max3, mymax):
    if mymax > max1:
        max3 = max2
        max2 = max1
        max1 = mymax
    elif mymax > max2:
        max3 = max2
        max2 = mymax
    elif mymax > max3:
        max3 = mymax
    return max1, max2, max3


for line in file:
    if line == "\n":
        max1, max2, max3 = calcMax(max1, max2, max3, temp_sum)
        temp_sum = 0
    else:
        temp_sum += int(line)

print(max1 + max2 + max3)
