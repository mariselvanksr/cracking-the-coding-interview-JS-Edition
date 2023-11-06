# HASH TABLE

`Hash Table is a data structure that allowed to store a pair of values. You can retrieve the values using the key, which you put in the table before hand.`

<img style="background:#fff;" src="./assets/Hash_table_3_1_1_0_1_0_0_SP.svg" alt="Hash Table Representation">

The time and space complexity of Hash Table is given below:

<table>
    <thead>
        <tr>
            <th style="text-align:center"></th>
            <th style="text-align:center">Hash Table time complexity in Big O Notation</th>
            <th style="text-align:center"></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align:center">Algorithm</td>
            <td style="text-align:center">Average</td>
            <td style="text-align:center">Worst case</td>
        </tr>
        <tr>
            <td style="text-align:center">Space</td>
            <td style="text-align:center">O(n)</td>
            <td style="text-align:center">O(n)</td>
        </tr>
        <tr>
            <td style="text-align:center">Search</td>
            <td style="text-align:center">O(1)</td>
            <td style="text-align:center">O(n)</td>
        </tr>
        <tr>
            <td style="text-align:center">Insert</td>
            <td style="text-align:center">O(1)</td>
            <td style="text-align:center">O(n)</td>
        </tr>
        <tr>
            <td style="text-align:center">Delete</td>
            <td style="text-align:center">O(1)</td>
            <td style="text-align:center">O(n)</td>
        </tr>
    </tbody>
</table>

## Components of Hash Table

**Hash Table**<br/>
A Hash Table is an array where all the keys stored in an specific order to which can be retrieved easily in later.

**Hash Function**<br/>
Hash function is for converting the key into a specific index for storing the key value pair.

A good Hash Function will have the below qualities:

- Efficiently computable.
- Should uniformly distribute the keys (Each table position is equally likely for each).
- Should minimize collisions.
- Should have a low load factor(the number of items in the table divided by the size of the table).

### What is Collision in Hash Table?
    Since Hash Function converts a big key into a small integer it's possible that we come up with same index for one or more keys. This leads the deletion of existing key and storing the new key in the same index. To handle this situation we have to implement a Collision Handling Mechanism.

- Chaining<br>
    Each value cell in the Hash Table is in linked list format. So, if any key hash same hash index we put inside the linked list with the existing keys.


## Sources:

https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/
https://www.geeksforgeeks.org/hashing-in-javascript/

