# Sliding Window Pattern

    This pattern involves creating and an sub-array or number from one position to another. Depending on a condition the window will be moved or closed. It's very useful while keeping track of subset of data.

## Example:

    Find a longest substring in a string which don't have repeating characters.
    Ex: "hellothere"

## Solution 1: Brute Force Approach

The brute force solution for this problem will be 

- Creating an for loop which starts from i = 0 to str.length - 1
- Creating an for loop inside first loop which starts from j = i to str.length - 1
- Create longestSubString variable as empty
- The value of i and j are not there in longestSubString just concatenate.
- Else reset the i or j and continue till you find the next longestSubString.

The problem here is:

    Time Complexity O(n^2)

## Solution 2: Sliding Window Approach

- Start window from p1 as 0 and p2 as 1
- Check whether p1 and p2 are not the same.
- If yes move p2 to next
- Else save the current window as the longestSubString variable and move p1 to next and p2 to next
- Before save to longestSubString variable please verify that if the existing longestSubString value should be lesser than the current window. Else do not save it.



