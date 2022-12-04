def part_1(lines):
    sum = 0
    for line in lines:
        left, right = line.split(",")
        left_1, left_2 = left.split("-")
        right_1, right_2 = right.split("-")

        left_set = set(range(int(left_1), int(left_2) + 1))
        right_set = set(range(int(right_1), int(right_2) + 1))

        intersection = left_set.intersection(right_set)

        if intersection:
            if intersection == left_set or intersection == right_set:
                sum += 1
    return sum


def main(file_name):
    with open(file_name) as file:
        lines = [x.strip() for x in file.readlines()]
    return part_1(lines)


print(main("input.txt"))
