const fs = require('fs');

function main() {
    const text = fs.readFileSync('./input.txt').toString('utf-8')
    const mapOfCubes = text.split('\n').map(txt => {
        const defaultValues = {
            'red': 0,
            'green': 0,
            'blue': 0, 
        };

        let [idString, playArr] = txt.trim().split(':');
        let showCubes = [];
        
        playArr.split(';').forEach(txt => {
            txt.split(',').forEach(colorsWithText => {
                if(colorsWithText.includes('green')) {
                    let cubeCount = colorsWithText.replace('green', '').trim();
                    defaultValues['green'] = parseInt(cubeCount);
                } else if(colorsWithText.includes('red')) {
                    let cubeCount = colorsWithText.replace('red', '').trim();
                    defaultValues['red'] = parseInt(cubeCount);
                } else if(colorsWithText.includes('blue')) {
                    let cubeCount = colorsWithText.replace('blue', '').trim();
                    defaultValues['blue'] = parseInt(cubeCount);
                }
            });

            showCubes.push({...defaultValues});
        })

        return {id: parseInt(idString.replace('Game', '').trim()), games: showCubes}
    });
   
    const MAX_CUBES = {
        'red': 12,
        'green': 13,
        'blue': 14,
    }

    let gameCount = 0;

    mapOfCubes.forEach(({id, games}) => {
        let isConditionSatisfied = games.every(({red, green, blue}) => {
            if(red <= MAX_CUBES.red && green <= MAX_CUBES.green && blue <= MAX_CUBES.blue) {
                return true;
            }
        });

        if(isConditionSatisfied) {
            gameCount += id;
        }
    });

    console.log(mapOfCubes, gameCount);
}

main()