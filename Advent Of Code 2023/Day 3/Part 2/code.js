const fs = require('fs');

function main() {
    const text = fs.readFileSync('./input.txt').toString('utf-8');
    const mapOfEngineData = [];

    text.split('\n').forEach(txt => {
        mapOfEngineData.push(txt.split(''))
    });

    let numbersAddressMap = {};

    mapOfEngineData.forEach((row, rowIndex) => {
        let number = '';
        let columnIndexForDigits = [];

        row.forEach((column, columnIndex) => {
            if(parseInt(column).toString() !== 'NaN') {
                number += column;
                columnIndexForDigits.push(columnIndex);
            }
            
            if((columnIndex === row.length - 1 && number) || (parseInt(column).toString() === 'NaN' && number)) {
                numbersAddressMap[rowIndex] = numbersAddressMap[rowIndex] ?? {};
                
                columnIndexForDigits.forEach(colIndex => {
                    numbersAddressMap[rowIndex][colIndex] = number;
                })
                
                number = '';
                columnIndexForDigits = [];
            }
        });
    });

    console.log(numbersAddressMap)
    
    let totalGearValues = 0;

    mapOfEngineData.forEach((row, rowIndex) => {
        row.forEach((column, columnIndex) => {
            // find *
            if(column === '*') {
                totalGearValues += calculateAdjutantValues(rowIndex, columnIndex, numbersAddressMap, rowCount = mapOfEngineData.length);
            }
        });
    });

    console.log(totalGearValues)
}

function calculateAdjutantValues(rowIndex, colIndex, numbersAddressMap, rowCount) {
    let adjutantValuesInRow = [];
    let adjutantValuesInTopRow = [];
    let adjutantValuesInBottomRow = [];

    // find left and right

    if(numbersAddressMap[rowIndex][colIndex - 1]) {
        adjutantValuesInRow.push(numbersAddressMap[rowIndex][colIndex - 1]);
    }

    if(numbersAddressMap[rowIndex][colIndex + 1]) {
        adjutantValuesInRow.push(numbersAddressMap[rowIndex][colIndex + 1]);
    }

    // direct top and adjutant top values (left and right)

    if (rowIndex > 0) {
        // direct top
        if(numbersAddressMap[rowIndex - 1][colIndex]) {
            adjutantValuesInTopRow.push(numbersAddressMap[rowIndex - 1][colIndex]);
        }

        // top left
        if(numbersAddressMap[rowIndex - 1][colIndex - 1]) {
            adjutantValuesInTopRow.push(numbersAddressMap[rowIndex - 1][colIndex - 1]);
        }

        // top right
        if(numbersAddressMap[rowIndex - 1][colIndex + 1]) {
            adjutantValuesInTopRow.push(numbersAddressMap[rowIndex - 1][colIndex + 1]);
        }
    }

    // direct bottom and adjutant bottom values (left and right)

    if(rowIndex !== rowCount - 1) {
         // direct bottom
         if(numbersAddressMap[rowIndex + 1][colIndex]) {
            adjutantValuesInBottomRow.push(numbersAddressMap[rowIndex + 1][colIndex]);
        }

        // bottom left
        if(numbersAddressMap[rowIndex + 1][colIndex - 1]) {
            adjutantValuesInBottomRow.push(numbersAddressMap[rowIndex + 1][colIndex - 1]);
        }

        // bottom right
        if(numbersAddressMap[rowIndex + 1][colIndex + 1]) {
            adjutantValuesInBottomRow.push(numbersAddressMap[rowIndex + 1][colIndex + 1]);
        }
    }

    let adjutantValues = [
        ...new Set(adjutantValuesInRow),
        ...new Set(adjutantValuesInTopRow),
        ...new Set(adjutantValuesInBottomRow),
    ];

    console.log(adjutantValues)
    // we need to calculate exactly for two
    return adjutantValues.length === 2 ? (parseInt(adjutantValues[0]) * parseInt(adjutantValues[1])) : 0;
}

main();