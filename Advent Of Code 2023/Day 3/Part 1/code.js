const fs = require('fs');

function main() {
    const text = fs.readFileSync('./input.txt').toString('utf-8');
    const mapOfEngineData = [];

    text.split('\n').forEach(txt => {
        mapOfEngineData.push(txt.split(''))
    });

    let numbersAddressMap = [];

    mapOfEngineData.forEach((row, rowIndex) => {
        let number = '';
        let columnIndexForDigits = [];

        row.forEach((column, columnIndex) => {
            if(parseInt(column).toString() !== 'NaN') {
                number += column;
                columnIndexForDigits.push(columnIndex);
            }
            
            if((columnIndex === row.length - 1 && number) || (parseInt(column).toString() === 'NaN' && number)) {
                numbersAddressMap.push({
                    number,
                    columnIndexes: columnIndexForDigits,
                    rowIndex,
                });

                number = '';
                columnIndexForDigits = [];
            }
        })
    })

    let engineNumbers = [];

    numbersAddressMap.forEach(({number, rowIndex, columnIndexes}) => {
        // check left side is symbol
        if (isSymbol(mapOfEngineData[rowIndex][columnIndexes[0] - 1])) {
            engineNumbers.push(number)
        }
        // check right side is symbol
        else if (isSymbol(mapOfEngineData[rowIndex][columnIndexes[columnIndexes.length - 1] + 1])) {
            engineNumbers.push(number)
        } 
        // check top and bottom row and diagonal as well
        else if(isTargetRowSymbolPresent(mapOfEngineData, rowIndex - 1, columnIndexes) || isTargetRowSymbolPresent(mapOfEngineData, rowIndex + 1, columnIndexes)) {
            engineNumbers.push(number)
        }
    });

    let totalEngineValueCount = engineNumbers.reduce((acc, number) => {
        acc += parseInt(number);

        return acc;
    }, 0)

    console.log(totalEngineValueCount)
}

function isTargetRowSymbolPresent(mapOfEngineData, row, columnIndexes) {
    if(row < 0 || row > mapOfEngineData.length - 1) return false;

    let isOnRowSymbolPresent = columnIndexes.some(colIndex => {
        return isSymbol(mapOfEngineData[row][colIndex]);
    });

    let isDiagonalSymbolPresent = isSymbol(mapOfEngineData[row][columnIndexes[0] - 1]) 
                                    || isSymbol(mapOfEngineData[row][columnIndexes[columnIndexes.length - 1] + 1])

    return isOnRowSymbolPresent || isDiagonalSymbolPresent;
}

function isSymbol(val) {
    return val !== '.' && parseInt(val).toString() === 'NaN' && val !== undefined;
}

main();