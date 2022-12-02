file = open("input.txt", "r")

"""
  Points for win -> 6
  Points for loss -> 0

  A -> Rock (1)       X -> Rock (1)
  B -> Paper (2)      Y -> Paper (2)
  C -> Scissors (3)   Z -> Scissors (3)
  
  Rock beats Scissors
  Paper beats Rock
  Scissors beats Paper

  A Y -> wins -> 2+6 = 8
  B X -> loss -> 1+0 = 1
  C Z -> draw -> 3+3 = 6

"""

points = 0

mymap = {
    ("A", "X"): 4,
    ("A", "Y"): 8,
    ("A", "Z"): 3,
    ("B", "X"): 1,
    ("B", "Y"): 5,
    ("B", "Z"): 9,
    ("C", "X"): 7,
    ("C", "Y"): 2,
    ("C", "Z"): 6,
}

for line in file:
    line = line.strip()
    line = line.split(" ")
    points += mymap[(line[0], line[1])]
    # mymap[(A, X)] will search for the key (A, X) in the dictionary and return the value

print(points)