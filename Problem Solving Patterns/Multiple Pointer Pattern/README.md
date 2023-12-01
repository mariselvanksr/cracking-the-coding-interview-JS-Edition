# Multiple Pointer Pattern

    Creating **Pointers** that corresponds to index/position and move the pointers to end or middle or to start based on some conditions. Very effective for minimal lookup and reduce time complexity.

## Example:
    Write a function called SumZero which accepts sorted array of integers. the function should find the first pair which sums up to zero.

### Solution 1: Brute Force Approach

- Loop the array from i = 0;
- Loop the same array from j = 0;
- Sums up the values and check if it's zero
- If found return [i, j] pair
- Else return [] / False

The problem here is Time Complexity:

    O(n^2)

### Solution 2: Frequency Counter Approach

- Loop the array and store it value as key and index as value in an Object/HashMap
- Loop array from i = 0 to i < array.length
- Find a remaining value needed for to sum up to zero. Like if 3 is the current value the remaining value needed to set as zero is toZeroValue = 3 - (3). Or in simple words inverse of the current value 3 is (-3).
- Check if -3 present in HashMap. If YES return [i , HashMap{-3}] which returns both index.
- Finally return [] / False

If we take a closer look the problem stats, the array is sorted. That means all lower values are in left side and greater values are in right side. So, if we have two pointer one start from left and another start from right and we sum up and check whether that return zero.

### Solution 3: Multiple Pointer Approach

- Create two pointer P1 and P2. P1 will start from 0 and P2 start from array.length - 1 (last element);

- Add two values and if value is greater than zero move P2 to previous.
- If value is less than zero move P1 to next.
- Do this until we have P1 < P2
- If sum is zero in any case return [P1, P2]
- Else return [] / False

