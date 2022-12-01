file = open("input.txt", "r")

max_sum = 0
temp_sum = 0

for line in file:
    if line == "\n":
        max_sum = max(max_sum, temp_sum)
        temp_sum = 0
    else:
        temp_sum += int(line)

print(max_sum)
