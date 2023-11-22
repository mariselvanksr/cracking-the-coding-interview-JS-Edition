/**
 * Write an algorithm such that if an element in an M*N matrix is 0 make the entire row and column as 0.
 */

/**
 * Solution 1:
 *  1. Create an array for row & column with M and N size.
 *  2. Initialize with false.
 *  3. Loop the array and set if column has zero or row has zero in those arrays.
 *  4. Nullify the matrix at last using those two arrays.
 */

function setZeros(matrix) {
    let rows = Array.from(matrix.length).map(() => false);
    let columns = Array.from(matrix[0].length).map(() => false);

    for(let row = 0; row < matrix.length; row++) {
        for(let column = 0; column < matrix[0].length;  column++) {
            if(matrix[row][column] === 0) {
                rows[row] = true;
                columns[column] = true;
            }
        }
    }

    for(let i=0; i< rows.length; i++) {
        if(rows[i]) {
            nullifyRow(matrix, i)
        }
    }

    for(let i=0; i< columns.length; i++) {
        if(columns[i]) {
            nullifyColumn(matrix, i)
        }
    }
}

function nullifyRow(matrix, row) {
    for(let column = 0; column < matrix[0].length; column++) {
        matrix[row][column] = 0;
    }
}

function nullifyColumn(matrix, column) {
    for(let row = 0; row < matrix.length; row++) {
        matrix[row][column] = 0;
    }
}

/**
 * Solution 2:
 *     The above approach takes O(N+M) space because of the additional arrays. Instead we can use the same
 * arrays first row and column to store the bit values and nullify them. But before that we have to check whether 
 * the first row and column has any zero values present to nullify them at last.
 */

function setZerosWithMinimumSpace(matrix) {
    let firstRowEmpty = false;
    let firstColumEmpty = false;

    // check first row has zero
    for(let column = 0; column < matrix[0].length; column++) {
        if(matrix[0][column] === 0) {
            firstRowEmpty = true;
            break;
        }
    }

    // check first column has zero
    for(let row = 0; row < matrix.length; row++) {
        if(matrix[row][0] === 0) {
            firstColumEmpty = true;
            break;
        }
    }

    for(let row = 0; row < matrix.length; row++) {
        for(let column = 0; column < matrix[0].length;  column++) {
            if(matrix[row][column] === 0) {
                matrix[0][column] = 0;
                matrix[row][0] = 0;
            }
        }
    }

    // nullify rows based on first column
    for(let row = 0; row < matrix.length; row++) {
        if(matrix[row][0] === 0) {
           nullifyRow(matrix, row);
        }
    }

    // nullify columns based on first row
    for(let column = 0; column < matrix[0].length; column++) {
        if(matrix[0][column] === 0) {
            nullifyColumn(matrix, column);
        }
    }

    if(firstRowEmpty) {
        nullifyRow(matrix, 0);
    }

    if(firstColumEmpty) {
        nullifyColumn(matrix, 0);
    }
}