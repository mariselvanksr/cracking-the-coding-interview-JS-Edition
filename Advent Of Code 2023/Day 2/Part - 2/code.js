const fs = require('fs');

function main() {
    const text = fs.readFileSync('./input.txt').toString('utf-8')
    const mapOfCubes = text.split('\n').map(txt => {
        const defaultValues = {
            'red': -Infinity,
            'green': -Infinity,
            'blue': -Infinity, 
        };

        let [idString, playArr] = txt.trim().split(':');
        
        playArr.split(';').forEach(txt => {
            txt.split(',').forEach(colorsWithText => {
                if(colorsWithText.includes('green')) {
                    let cubeCount = parseInt(colorsWithText.replace('green', '').trim());
                    defaultValues['green'] = defaultValues['green'] < cubeCount ? cubeCount : defaultValues['green'];
                } else if(colorsWithText.includes('red')) {
                    let cubeCount =parseInt(colorsWithText.replace('red', '').trim());
                    defaultValues['red'] = defaultValues['red'] < cubeCount ? cubeCount : defaultValues['red'];
                } else if(colorsWithText.includes('blue')) {
                    let cubeCount = parseInt(colorsWithText.replace('blue', '').trim());
                    defaultValues['blue'] = defaultValues['blue'] < cubeCount ? cubeCount : defaultValues['blue'];
                }
            });
        });

        return {id: parseInt(idString.replace('Game', '').trim()), ...defaultValues}
    });

    let sum = 0;

    mapOfCubes.forEach(({red, green, blue}) =>  {
        red = red !== -Infinity ? red : 1; // If not 1 then when multiply value will be 0
        green = green !== -Infinity ? green : 1; // If not 1 then when multiply value will be 0
        blue = blue !== -Infinity ? blue : 1; // If not 1 then when multiply value will be 0
        sum += (red * green * blue)
    });

    console.log(sum);
}

main()