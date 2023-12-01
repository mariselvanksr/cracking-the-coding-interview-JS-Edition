# Frequency Counter Pattern

    Frequency Counter Pattern uses object/hashmaps to collect values for same values. It'll drastically improve your time complexity from O(n^2) to O(n).

## Example:

If you asked a below question:

    Write a function accepts two arrays a1 and a2 check if both have same frequency. Assuming both arrays are not sorted in any format.

The above question can be solved in a lot of different ways. We can examine one by one.

## Solution 1: Brute Force Approach

The ideas is we have to loop the first array and check if the values present in the second array and mark it with some code that the value already looked up in both arrays.

    let a1 = [4, 3, 5, 1];
    let a2 = [3, 1, 4, 5];

    // final values for a1 and a2

    a1 = [_, _, _, _];
    a2 = [_, _, _, _];

    // return if both arrays have only _

The problem in this approach is **Time Complexity**

    O(n^2)

## Solution 2: Pre Sort And Do linear Search

In this solution, we can sort both the arrays in O(n log n) time. I assume we use merge sort to achieve O(n log n). The do the linear search to achieve the goal.

Time complexity:

    O(n log n)

**Can we better?** And the answer is ***YES***

## Solution 3: Using Frequency Counter Approach

The algorithm for frequency count is:

- Loop array 1 and store it frequency in HashMap
- Loop array 2 and store it frequency in HashMap
- Get the keys for HashMap and check if both are having the same values.
- If yes at the end return TRUE or return FALSE

Time Complexity:

    O(n)

Space Complexity:

    // For storing hash map values.
    
    O(2n) => O(n)