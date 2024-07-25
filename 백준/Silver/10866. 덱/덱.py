import sys
input = sys.stdin.readline
N = int(input())
from collections import deque


d = deque()

for _ in range(N):
    prompt = input().split()
    
    if len(prompt) > 1:
        order, num = prompt
    else:
        order = prompt[0]

    if order == "push_front":
        d.appendleft(num)

    if order == "push_back":
        d.append(num)
    
    elif order == "pop_front":
        print(d.popleft() if d else -1)

    elif order == "pop_back":
        print(d.pop() if d else -1)
    
    elif order == "size":
        print(len(d))
    
    elif order == "empty":
        print(0 if d else 1)
    
    elif order == "front":
        print(d[0] if d else -1)
    
    elif order == "back":
        print(d[-1] if d else - 1)