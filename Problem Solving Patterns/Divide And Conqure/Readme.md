# Divide And Conquer

    Recursively breaks down a problem into two are more sub-problems until these becomes simple enough to solve directly.

## Usage of Divide And Conquer

Many existing algorithms we know for sorting and other general purpose algorithms are using divide adn conquer method to achieve their output.

- Quick Sort
- Merge Sort
- Closest Pair of Points
- [others](https://www.geeksforgeeks.org/introduction-to-divide-and-conquer-algorithm-data-structure-and-algorithm-tutorials/)

## Example problem for DAC

Find an element in an sorted array.

## Solution 1: Brute Force Approach

The basic solution for this problem is to recursively loop into the array from 0 to array.length-1 and when you found it you have to return the value. If not until the end you will loop and return false or Not Found.

The problem here, Time Complexity

    O(n)

You can think of O(n) is great. Yeah, I accept that. But when the data you wanted to find is within a **Billon Records**.

So, if you are trying to find last element you have start from the first and goes all the way up to the end and return the data. Surely it takes a lot of time. And all the major systems are now handling data more than Billon.

What if I told you instead of looping over billion times to find and element you can do it with much less lookup in the array, like 20 (assumption values, not calculated properly) lookups.

## Solution 2: Divide And Conquer

If we look at the problem, it says the array is sorted. So, the general algorithm here is

- Start with two pointers left and right.
- Position them as extreme start and end index of the array.
- Find the middle index of the array.
    - Floor of left + (right - left) / 2
    - We can do floor of (left + right) / 2 and it gives the same result as well. But, if we work with a lot of data it throws index out of range error because the capacity the language has over managing larger numbers. You can see this [video](https://www.youtube.com/watch?v=_eS-nNnkKfI) for getting the full understanding.
- If the element found in the middle then return.
- If the element not found and greater than the middle element we have to search the right half.
- Move the left pointer to middle and start the steps again.
- If the element if lesser than middle then move the right pointer to middle and starts the steps again.